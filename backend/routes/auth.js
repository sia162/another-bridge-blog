const router = require("express").Router();
const User = require("../models/User");

// bcrypt package
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// REGISTER: POST "/api/auth/register"
router.post(
  "/register",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res.status(400).json({
          success,
          error: "sorry a user with this email already exist!",
        });
      }

      // MAIN WORK OF CREATING USER:
      const salt = await bcrypt.genSalt(10);
      securePass = await bcrypt.hash(req.body.password, salt);

      // creating new user in User Schema
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });

      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

// LOGIN: POST /api/auth/login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        const success = false;
        return res
          .status(400)
          .json({ success, error: "Try to login with correct credentials!" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        const success = false;
        return res
          .status(400)
          .json({ success, error: "Try to login with correct credentials!" });
      }

      res.json({ user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

module.exports = router;

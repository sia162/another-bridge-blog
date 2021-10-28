const router = require("express").Router();
const Comment = require("../models/Comment");

// user fetch to get data
const fetchuser = require("../middleware/jwtauth");

// create comment: POST /api/comment/addcomment -->auth token needed
router.post("/addcomment/:id", fetchuser, async (req, res) => {
  try {
    const { com, reply } = req.body;
    const postid = req.params.id;

    let name = req.user.name;
    let email = req.user.email;
    let userid = req.user.id;

    const comment = new Comment({
      postId: postid,
      email,
      userid,
      name,
      com,
      reply,
    });

    const savedComment = await comment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// edit comment: POST /api/comment/addcomment -->auth token needed //id is of comment
router.put("/editcomment/:id", fetchuser, async (req, res) => {
  const { com, reply } = req.body;

  let userid = req.user.id;

  try {
    const newComment = {};
    if (com) {
      newComment.com = com;
    }

    let comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(400).send("not found");
    }

    if (comment.userid.toString() !== userid) {
      return res.status(401).send("not allowed");
    }

    comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: newComment },
      { new: true }
    );

    res.status(200).json({ comment });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// delete comment: POST /api/comment/addcomment -->auth token needed //id is of comment
router.delete("/deletecomment/:id", fetchuser, async (req, res) => {
  let userid = req.user.id;

  try {
    let comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(400).send("not found");
    }

    if (comment.userid.toString() !== userid) {
      return res.status(401).send("not allowed");
    }

    comment = await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({ comment });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

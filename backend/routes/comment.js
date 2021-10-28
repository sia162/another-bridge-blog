const router = require("express").Router();
const Comment = require("../models/Comment");

// create comment: POST /api/comment/addcomment
router.post("/addcomment/:id", async (req, res) => {
  try {
    const { email, name, com, reply } = req.body;
    const postid = req.params.id;

    const comment = new Comment({
      postId: postid,
      email,
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

module.exports = router;

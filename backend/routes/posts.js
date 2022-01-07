const router = require("express").Router();
const Post = require("../models/Post");

// GET All POSTS present on site: GET "/api/posts/" --> /?categories=
router.get("/", async (req, res) => {
  const catname = req.query.category;
  try {
    let posts;

    if (catname) {
      posts = await Post.find({
        categories: {
          $in: [catname],
        },
      });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// GET A POST: GET "/api/posts/:id"
router.get("/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    let postNotFound = true;
    console.error(error.message);
    res.status(500).send({ postNotFound });
  }
});

//CREATE Post: POST "/api/posts/addpost"
router.post("/addpost", async (req, res) => {
  try {
    const { title, desc, photo, categories } = req.body;
    // saving new note
    const post = new Post({
      title,
      desc,
      photo,
      categories,
    });

    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// UPDATE POST: PUT "/api/posts/updatepost"
router.put("/updatepost/:id", async (req, res) => {
  const { title, desc, photo, categories } = req.body;

  try {
    const newPost = {};
    if (title) {
      newPost.title = title;
    }
    if (desc) {
      newPost.desc = desc;
    }
    if (photo) {
      newPost.photo = photo;
    }
    if (categories) {
      newPost.categories = categories;
    }

    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("not found");
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: newPost },
      { new: true }
    );

    res.status(200).json({ post });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// DELETE POST: DELETE "/api/posts/deletepost" --> login needed (id in params is of the post to tbe updated)
router.delete("/deletepost/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("post not found");
    }

    post = await Post.findByIdAndDelete(req.params.id);
    res.json({ success: "post has been delete", post: post });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;

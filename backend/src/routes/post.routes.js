const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router()
const multer = require("multer");
const { createPostController } = require('../controller/post.controller');



const upload = multer({storage:multer.memoryStorage()})
//api protected
router.post("/",
    authMiddleware,
    upload.single("image"),
     createPostController)

router.get('/', authMiddleware, (req, res) => {
  // You can return a simple message
  return res.status(200).json({ message: `Authenticated as ${req.user.username}` });
});


module.exports = router
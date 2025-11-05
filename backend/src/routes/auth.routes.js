const express = require('express')
const router = express.Router();
const { registerController, loginController, logoutController } = require('../controller/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');




router.get('/check', authMiddleware, (req, res) => {
  res.status(200).json({
    message: "User is authenticated",
    user: {
      id: req.user._id,
      username: req.user.username
    }
  })
})

//post Api
router.post('/register',registerController)
router.post('/login',loginController)
router.post("/logout", logoutController);

    
module.exports = router
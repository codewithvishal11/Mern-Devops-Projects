const express = require('express');
const { signupUser, loginUser, logoutUser } = require('../controllers/authController');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/checkauth', isLoggedIn, (req, res)=>{
    res.json({success: true, user: req.user});
});

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout',isLoggedIn, logoutUser);

module.exports = router;
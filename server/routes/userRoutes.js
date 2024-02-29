const router = require('express').Router;

router.get('/getProfile', userController);
router.post('/updateProfile', userController);
router.get('/signin', userController);
router.get('/signout', userController);

module.exports = router;
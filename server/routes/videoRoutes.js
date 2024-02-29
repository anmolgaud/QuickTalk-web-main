const router = require('express').Router;

router.post('/createRoom', videoController);
router.post('/joinRoom', videoController);

module.exports = router;
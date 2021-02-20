const router = require('express').Router();
const authRoutes = require('./auth');
const events = require('./events');
const family = require('./family');
const user = require('./user');

router.use('/auth', authRoutes);
router.use('/eventtables', events);
router.use('/familycodes', family);
router.use('/usertables', user);

module.exports = router;

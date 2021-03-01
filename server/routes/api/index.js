const router = require('express').Router();
const authRoutes = require('./auth');
const events = require('./events');
const family = require('./family');
const user = require('./user');
const passport = require("../../config/passport");


router.use('/auth', authRoutes);
router.use('/eventtables', events);
router.use('/familycodes', family);
router.use('/usertables', user);
router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log(req.user.dataValues)
    // Sending back a password, even a hashed password, isn't a good idea
    res.json(
        req.user
    );
});
module.exports = router;

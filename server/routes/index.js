const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes
router.use('/api', apiRoutes);

// router.route("/hello").get(function(req, res) {
//     const jsonObj = {
//       test: "testStuff"
//     }
//     console.log("hello")
//     res.send(jsonObj);
//   })

module.exports = router;

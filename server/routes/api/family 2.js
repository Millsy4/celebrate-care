const router = require("express").Router();
const familyController = require("../../controllers/familyController");

router
  .route("/")
  .get(familyController.findAll)
  .post(familyController.create);

module.exports = router;

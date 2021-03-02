const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

router
  .route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

router
  .route("/:id/:eventStatus")
  .get(eventsController.findAllEventsByStatus)
  .put(eventsController.editUpcomingEvents)

router.route("/:id").put(eventsController.editWishlistEvents);

router.route("/:eventStatus").get(eventsController.findAllEventIdeas);

module.exports = router;

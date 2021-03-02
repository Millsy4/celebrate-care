const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Eventtable.findAll()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAllEventsByStatus: function(req, res) {
    db.Eventtable.findAll({
      where: {
        familycode_id: req.params.id,
        event_status: req.params.eventStatus,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findAllEventIdeas: function(req, res) {
    db.Eventtable.findAll({
      where: {
        event_status: req.params.eventStatus,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  editUpcomingEvents: function(req, res) {
    console.log(req.body);
    db.Eventtable.update(
      {
        eventIdea: req.body.eventIdea,
        details: req.body.details,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      },
      {
        where: {
          familycode_id: req.params.id,
          event_status: req.params.eventStatus,
          id: req.body.eventId
        },
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  editWishlistEvents: function(req, res) {
    console.log(req.body);
    db.Eventtable.update(
      {
        eventIdea: req.body.eventIdea,
        details: req.body.details,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        eventStatus: req.body.eventStatus,
      },
      {
        where: {
          familycode_id: req.params.id,
          id: req.body.eventId
        },
      }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Eventtable.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

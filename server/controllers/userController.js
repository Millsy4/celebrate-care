const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Usertable.findAll()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Usertable.findOne({
      where: {
        id: req.params.id,
      },
      include: [{all: true}]
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    if (req.body.HaveCode) {
      db.Usertable.create(req.body)
        .then((savedUser) => {
          db.Familycode.findOne({
            where: { FamilyCode: req.body.FamilyCode },
          }).then((foundFamilyCode) => {
            console.log(foundFamilyCode);
            db.Familyties.create({
              Email: req.body.Email,
              FamilycodeId: foundFamilyCode.dataValues.id,
              UsertableId: savedUser.id,
            })
              .then((savedFamilyTie) => {
                console.log(savedFamilyTie);
                res.json({ ...savedUser, ...savedFamilyTie });
              })
              .catch((err) => {
                console.error(err);
                res.status(422).json(err);
              });
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(422).json(err);
        });
    } else {
      db.Familycode.create(req.body).then((savedFamilyCode) => {
        db.Usertable.create(req.body)
          .then((savedUser) => {
            db.Familyties.create({
              Email: req.body.Email,
              FamilycodeId: savedFamilyCode.id,
              UsertableId: savedUser.id,
            }).then((savedFamilyTie) => {
              res.json({ ...savedFamilyCode, ...savedFamilyTie, ...savedUser });
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(422).json(err);
          });
      });
    }
  },
};

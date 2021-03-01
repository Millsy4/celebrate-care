const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

// Telling passport we want to use a Local Strategy.
// In other words, we want login with a username/email and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an email, rather than a 'username'
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      console.log(email)
      console.log(password)
      // When a user tries to sign in this code runs
      db.Usertable.findOne({
        where: {
          Email: email,
        },
        include: [
          {
            model: db.Familyties, include: [
              db.Familycode
            ]
          }
        ]


      }).then((dbUser) => {
        //call other tables 

        //


        if (!dbUser || !dbUser.validPassword(password)) {
          return done(null, false, {
            message: 'Incorrect email or password',
          });
        }
        // Login failed
        // Login success
        return done(null, dbUser);
      }
      )
    })

);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

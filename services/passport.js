const passport = require('passport');
const refresh = require('passport-oauth2-refresh');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');
const authKeys = require('../config/keys');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

let googleStrategy = new GoogleStrategy(
  {
    clientID: authKeys.googleClientID,
    clientSecret: authKeys.googleClientSecret,
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id})
    if (existingUser) {
      existingUser.accessToken = accessToken;
      existingUser.save().then(()=>{
        return done(null, existingUser);
      })
    }else{
      // make a new record
      let user = await new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        accessToken : accessToken,
        refreshToken : refreshToken
      }).save()
      done(null, user);
    }
});

passport.use(googleStrategy);
refresh.use(googleStrategy)

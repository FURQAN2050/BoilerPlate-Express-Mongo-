const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const {secret} = require('../config')
const User = require('../models/user')

// let opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = secret;
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
  },
    async function(jwt_payload, done) {
    try {
        // find user specified in token
        console.log('jwt_payload.sub: ',jwt_payload.sub)
        const user = await User.findById(jwt_payload.sub)
        console.log('user: ',user)
        // if user does not exist, handle it
        if(!user){
            return done(null, false)
        }
        // otherwise return user
        done(null, user);
    } catch (error) {
        done(error, false)
    }
}));

passport.use(new LocalStrategy({
    usernameField: 'email'
},async (email, password, done)=>{
    try {
        const user = await User.findOne({ email })

    if(!user){
        return done(null, false)
    }
    // Check if the password is correct
    const isMatch = await user.isValidPassword(password);
    console.log('isMatch: ', isMatch)
  
    // If not, handle it
    if (!isMatch) {
      return done(null, false);
    }
  
    // Otherwise, return the user
    done(null, user);
        
    } catch (error) {
        done(error, false)
    }
}));


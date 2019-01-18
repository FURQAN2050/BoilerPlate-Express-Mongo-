const router = require('express').Router();
const passport = require('passport')
const { login } = require('../../services/users/index')
const LocalPassport =  passport.authenticate('local', {session: false});

router.post('/login', LocalPassport, login  )

module.exports = router;
const router = require('express').Router();
const {signup} = require('../../services/users')
const passport = require('passport')
const passportConf = require('../../utilities/passport');
router.post('/signup', signup)
module.exports = router;
const router = require('express').Router();
const passport = require('passport');
const {getAllItems} = require('../../services/items/items');
const passportJWT = passport.authenticate('jwt', { session: false });

router.get('/items', passportJWT, getAllItems)

module.exports = router;
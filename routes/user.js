const router = require('express').Router();
const schema = require ("../schema/user");
const schemaSingIn = require("../schema/signIn");
const validator = require ("../middlewares/validator");
const {accountExists} = require ('../middlewares/accountExistsSignUp');
const accountExistsSingIn = require ('../middlewares/accountExistsSignIn');
const {accountHasBeenVerified} = require ('../middlewares/accountHasBeenVerified');
const haveSignIn = require ('../middlewares/haveSignIn');
let {create, userVerification, logIn, loginWithToken} = require ('../controllers/user');
const passport =  require('../config/passport');


router.post('/sign-up', validator(schema), accountExists, create);
router.get('/verify/:code', userVerification);
router.post('/sign-in', validator(schemaSingIn), accountExistsSingIn, accountHasBeenVerified, logIn);
router.post('/token', passport.authenticate('jwt', {session: false}), haveSignIn, loginWithToken)


module.exports = router;

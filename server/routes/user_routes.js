const router = require('express').Router();
const userController = require('../controllers/users_controller');

router.route('/signup')
        .post(userController.signupUser)
router.route('/login')
        .post(userController.loginUser)
router.route('/:id')
        // .get(userController.authorize)
        .get(userController.getUserById)
        .delete(userController.deleteUser)

module.exports = router;
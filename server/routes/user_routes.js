const router = require('express').Router();
const userController = require('../controllers/users_controller');
const authorize = require('../middleware/authorize')

router.use(authorize)

router.route('/')
        .get(userController.getUser)
        .delete(userController.deleteUser)
router.route('/:id/favourite/deals')
        .get(userController.getUserFavouriteDeals)
router.route('/:id/favourite/places')
        .get(userController.getUserFavouritePlaces)

module.exports = router;
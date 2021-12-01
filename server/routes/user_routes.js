const router = require('express').Router();
const userController = require('../controllers/users_controller');
const authorize = require('../middleware/authorize')

// Authorization middleware. Takes the token supplied by the client, decodes and sends to the final endpoint
router.use(authorize)

router.route('/')
        .get(userController.getUser)
        .delete(userController.deleteUser)
router.route('/favourite/deals')
        .get(userController.getUserFavouriteDeals)
        .post(userController.addToFavouriteDeals)
router.route('/favourite/deals/:deal_id')
        .delete(userController.deleteFavouriteDeal)        
router.route('/favourite/places')
        .get(userController.getUserFavouritePlaces)
        .post(userController.addToFavouritePlaces)        

module.exports = router;
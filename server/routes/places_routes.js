const router = require('express').Router();
const placesController = require('../controllers/places_controller');

router.route('/')
        .get(placesController.allPlaces);
router.route('/:establishment_id')
        .get(placesController.placeById)

module.exports = router
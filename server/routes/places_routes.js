const router = require('express').Router();
const placesController = require('../controllers/places_controller');

router.route('/')
        .get(placesController.allPlaces);

module.exports = router
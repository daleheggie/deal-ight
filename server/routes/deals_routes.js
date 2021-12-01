const router = require('express').Router();
const dealsController = require('../controllers/deals_controller');

router.route('/:day')
        .get(dealsController.dealsByDay);

module.exports = router
const router = require('express').Router();
const dealsController = require('../controllers/deals_controller');

router.route('/')
        .get(dealsController.allDeals)
        .post(dealsController.addDeal)
router.route('/:day')
        .get(dealsController.dealsByDay);
router.route('/:deal_id')
        .delete(dealsController.deleteDeal)        

module.exports = router
const express = require('express');
const restaurantcontroller = require('../Controllers/restaurantcontroller');
const router = express.Router();

router.post('/createRestaurant', restaurantcontroller.createRestaurant);
router.get('/listRestaurant', restaurantcontroller.listRestaurant);
router.put('/updateRestaurant/:restaurantId', restaurantcontroller.updateRestaurant);
router.put('/disableRestaurant/:restaurantId', restaurantcontroller.disableRestaurant);
router.put('/enableRestaurant/:restaurantId', restaurantcontroller.enableRestaurant);

module.exports = router;
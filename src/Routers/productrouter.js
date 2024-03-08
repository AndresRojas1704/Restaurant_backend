const express = require('express');
const productcontroller = require('../Controllers/productcontroller');
const router = express.Router();

router.post('/createProduct', productcontroller.createProduct);
router.get('/listProducts/:restaurantId', productcontroller.listProducts);
router.put('/updateProduct/:productId', productcontroller.updateProduct);
router.put('/disableProduct/:productId', productcontroller.disableProduct);
router.put('/enableProduct/:productId', productcontroller.enableProduct);

module.exports = router;
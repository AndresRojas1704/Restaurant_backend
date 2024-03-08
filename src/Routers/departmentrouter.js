const express = require('express');
const departmentcontroller = require('../Controllers/departmentController');
const router = express.Router();

router.get('/listdepartments', departmentcontroller.listDepartments);

module.exports = router;
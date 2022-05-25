const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get("/",homeController.Index);

module.exports = router;
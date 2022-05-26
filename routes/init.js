const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const adminRoutes = require('./admin');
const errorRoutes = require('./error');

router.use(homeRoutes);
router.use("/admin",adminRoutes)
router.use(errorRoutes);

console.log(process.env.TEST);

module.exports = router;
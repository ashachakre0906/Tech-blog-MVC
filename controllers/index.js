const router = require('express').Router();

const apiRoutes = require('./api');
const homePageRoutes = require('./homePageRoutes.js');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homePageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use ('/api', apiRoutes );

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');

// add a middleware route of /api to all api routes from the imported apiRoutes
router.use('/api', apiRoutes);

// return a message when the wrong route is used
router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
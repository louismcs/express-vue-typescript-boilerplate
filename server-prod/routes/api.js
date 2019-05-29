var Router = require('express').Router;
var router = Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
    res.send('Hello API 1');
});

export default router;

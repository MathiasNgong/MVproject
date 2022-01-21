var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('loginPage', { title: 'Login' });
});

/* GET signUp page. */
router.get('/signUp', function(req, res, next) {
    res.render('signUp', { title: 'Sign Up' });
  });

  router.post('/login', function(req, res, next) {
    res.send('Invalid or unregistered user name and password');
  });
  


module.exports = router;

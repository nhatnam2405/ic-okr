const express = require('express');
const router = express.Router();

const {
   login,
   checkToken
} = require('../controllers/auth.controller');
const {
    checkBasic
 } = require('../middlewares/common.middleware');


// auth route
router.post('/login',checkBasic ,login);
router.post('/checkToken',checkBasic ,checkToken);

module.exports = router;
const jwt = require('jsonwebtoken');


exports.checkBasic = async (req, res, next) => {
    const headersToken = req.get('authorization');
    
    next();
  }
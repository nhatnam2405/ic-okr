const jwt = require('jsonwebtoken');

exports.login = async(req,res)=>{
    var access_token = jwt.sign(
        {
            "genos":"ABC"
        },
        "SOCIU",
        {
            expiresIn: 60*5,
        }
    );
    res.status(200).json({
        access_token
      });
}

exports.checkToken = async (req,res)=>{
    const { test } = req.body;
    console.log(test);
    jwt.verify(test, 'SOCIU', function(err, decoded) {
        if(err){
            console.log(err);
        }
        else{
            console.log(decoded);
        }
      });
      res.status(500);
}
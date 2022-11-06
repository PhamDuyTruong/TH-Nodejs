const jwt = require("jsonwebtoken");

const authMiddleware = {
    // Verify token
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token){
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.MY_SECRETKEY, (err, user) => {
                if(err){
                   return res.status(403).json("Token is not valid");
                }
                req.user = user;
                next();
            });
        }else {
           return res.status(401).json("You're not authenticated");
        }
    },

    verifyTokenAndAdminAuth: (req, res, next) => {
        authMiddleware.verifyToken(req, res, () => {
            if(req.user.isAdmin || req.user.id === req.params.id){
                next();
            }else{
                return res.status(403).json("You're not allowed to delete other")
            }
        })
    }
};

module.exports = authMiddleware;
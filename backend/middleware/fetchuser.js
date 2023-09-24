var jwt = require('jsonwebtoken');
const JWT_SECRET = "Akshayjwt123";

const fetchuser = (req, res, next) => {
    try {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({ error: "please send a valid token" });
        }
        const data = jwt.verify(token, JWT_SECRET);
        userdata = data.user;
    } catch (error) {
        res.status(401).send({ error: "please send a valid token" });
    }
    next();
}
module.exports = fetchuser;
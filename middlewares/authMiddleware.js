const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({ error: 'Unauthorized' });

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    } catch {
        res.status(401).send({ error: 'Unauthorized' });
    }
};

module.exports = authMiddleware;


const checkOrigin = (req, res, next) => {
    const token = req.headers.authorization.split(' ').pop();
    if (token === '123456') {
        next();
    } else {
        res.status(401).send({ error: 'No eres usuario' });
    }
}

module.exports = checkOrigin;

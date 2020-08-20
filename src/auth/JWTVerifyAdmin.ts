import jwt from 'jsonwebtoken'
const secret = "SecretAdmin"
export function verifyJWT(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Nenhum token enviado.' });

    jwt.verify(token, secret, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Falha ao autenticar.' });

        req.body.adminObj = decoded;
        next();
    });
}
export function createToken({ id, email, name }) {
    var token = jwt.sign(
        { id: id, email: email, name: name },
        secret, //put in ENV file
        {
            expiresIn: 300000 //change on prodution
        });
    return token
}
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// Crea un cliente para acceder a las claves públicas de Auth0
const client = jwksClient({
  jwksUri: 'https://dev-fvp00ztww2h1bogg.us.auth0.com/.well-known/jwks.json'  // Reemplaza con tu dominio Auth0
});

// Función para obtener la clave pública desde el JWKS
const getKey = (header, callback) => {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      return callback(err);
    }
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  // Obtén el token del encabezado 'Authorization'
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido', error: err.message });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authenticateToken;

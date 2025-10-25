

const auth0Config = require('./auth0.json');
const jwtConfig = require('./jwt.json');


// Auth0
export const auth0 = ({
    domain : auth0Config.auth0.domain,
    clientId : auth0Config.auth0.clientID,
    redirectUri : auth0Config.auth0.redirectUri
});

// Jwt
export const Jwt_token = jwtConfig.jwt_token;

    

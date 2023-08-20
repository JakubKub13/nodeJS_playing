const allowedOrigins = require('./allowedOrigins');   


// Cross origin resource sharing
const corsOptions = {
    origin: (origin, callback) => {
        // if domain in wihitelist
        if(allowedOrigins.indexOf(origin) !== - 1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;
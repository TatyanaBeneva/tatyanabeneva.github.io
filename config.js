const env = process.env.NODE_ENV || 'production';

const config = {
    development: {
        port: process.env.PORT || 5000,
    },
    production: {
        port: process.env.PORT || 80,
    }
};

module.exports = config[env];
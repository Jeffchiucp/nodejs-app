// config/database.js
var url = 'mongodb://localhost/pixio'

switch(process.env.NODE_ENV) {
    case 'production':
    url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds135364.mlab.com:35364/pixio`
};

module.exports = {
    'url' : url
};

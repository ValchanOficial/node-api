const mongoose = require('mongoose');

class Database {
    static connect(){
        mongoose.connect('mongodb://localhost:27017/db', { useNewUrlParser: true, useUnifiedTopology: true });
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection error!'));
        db.once('open', () => {
            console.log(`Database has been connected successfully`);
        });
    }
}

module.exports = Database;

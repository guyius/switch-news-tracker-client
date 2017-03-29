const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const dbUrl = `mongodb://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@ds039088.mlab.com:39088/guyius`;

function get(query) {
    return new Promise((resolve, reject) => {
        mongoClient.connect(dbUrl, (err, db) => {
            if (err) {
                console.log(`we failed because of: ${err}`);
                reject();
            }
            const collection = db.collection('hashtags');
            collection.find({}, {}).toArray((err, results) => {
                if (err) {
                    console.log(`failed to get data with: ${err}`);
                } else {
                    db.close();
                    resolve(JSON.stringify(results));
                }
            });
        });
    });
}

module.exports = {
    queryDB: (query) => {
        return get(query);
    }
}

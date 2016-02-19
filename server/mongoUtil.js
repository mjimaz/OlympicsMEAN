var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

module.exports = {
	connect() {
		client.connect('mongodb://localhost:27017/olympics-dev', function(err, db){
			if(err){
				console.error('error connecting to Mongo');
				process.exit(1);
			}
			_db = db;
			console.log('connected to Mongo');
		})
	},
	sports(){
		return _db.collection('sports');
	}
}
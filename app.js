// Redis basic commands through Node

var redis = require('redis');
var client = redis.createClient(); // creates a new client

// Connecting to redis
client.on('connect', function(){
	console.log('connected');
});


// setting value to a key
client.set('framework','AngularJS', function(err,reply){
	if (err){
		console.log(err);
	} else {
		console.log(reply);
	}

});


// Getting a value
client.get('framework', function(err,reply){
	if (err){
		console.log(err);
	} else {
		console.log(reply);
	}
});


// Storing Hash
client.hmset('frameworks',{
	'javascript' : 'AngularJS',
	'css':'Bootstrap',
	'node':'Express'			
});


// Getting hash
client.hgetall('frameworks', function(err,object){
		console.log(object);
});


// Storing lists
client.rpush(['frameworks_js','angularjs','react'], function(err,reply){
	console.log(reply); //prints 2
});


// Retrieving the elements
client.lrange('frameworks_js', 0,-1, function(err,reply){
	console.log(reply);
});


// Storing Sets
client.sadd(['tags','angularjs','backbonejs','react'], function(err,reply){
	console.log(reply);
});


// Retrieving sets
client.smembers('tags', function(err,reply){
	if (err){
		console.log(err);
	} else {
		console.log(reply);
	}
});


// Checking the Existence of Keys
client.exists('key', function(err,reply){
	if (err){
		console.log(err);
	} else if (reply === 1) {
		console.log('the key exists');
	} else {
		console.log("key doesn't exists");
	}
});





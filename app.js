let cassandra = require('cassandra-driver');

let authProvider = new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra');

let contactPoints = ['127.0.0.1'];

let localDataCenter = 'datacenter1';

let client = new cassandra.Client({contactPoints: contactPoints, authProvider: authProvider, localDataCenter: localDataCenter, keyspace:'grocery'});


let query = 'SELECT name, price_p_item FROM grocery.fruit_stock WHERE name=? ALLOW FILTERING';
let q1 = client.execute(query, ['oranges']).then(result => {console.log('The cost per orange is ' + result.rows[0].price_p_item);}).catch((err) => {console.log('ERROR oranges:', err);});

let q2 = client.execute(query, ['pineapples']).then(result => {console.log('The cost per pineapple is ' + result.rows[0].price_p_item);}).catch((err) => {console.log('ERROR pineapples:', err);});

let q3 = client.execute(query, ['apples']).then(result => {console.log('The cost per apple is ' + result.rows[0].price_p_item);}).catch((err) => {console.log('ERROR apples:', err);});


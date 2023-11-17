# 31-01-cassandra-nodejs-database-test

***create new user and password***
 `$ cqlsh 127.0.0.1 -u username -p password`


***create table in cassandra***
```
CREATE KEYSPACE grocery WITH REPLICATION = {'class' : 'SimpleStrategy','replication_factor' : 1};

CREATE TABLE IF NOT EXISTS grocery.fruit_stock (item_id TEXT, name TEXT, price_p_item DECIMAL, PRIMARY KEY (item_id));

INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('a0','apples',0.50);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('b1','bananas',0.40);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('c3','oranges',0.35);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('d4','pineapples',2.5);
```

***show table***

`SELECT * FROM grocery.fruit_stock;`

***run project***
`node app.js`

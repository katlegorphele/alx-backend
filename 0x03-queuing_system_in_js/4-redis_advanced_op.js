//Using hset, let’s store the following:

/*The key of the hash should be HolbertonSchools
It should have a value for:
Portland=50
Seattle=80
New York=20
Bogota=20
Cali=40
Paris=2
Make sure you use redis.print for each hset */

import { createClient } from 'redis';
import redis from 'redis';

const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected')
});

client.on('error', (err) => {
    console.log(`Something went wrong ${err}`)
});

const hash = 'HolbertonSchools';

client.hset(hash, 'Portland', 50, redis.print);
client.hset(hash, 'Seattle', 80, redis.print);
client.hset(hash, 'New York', 20, redis.print);
client.hset(hash, 'Bogota', 20, redis.print);
client.hset(hash, 'Cali', 40, redis.print);
client.hset(hash, 'Paris', 2, redis.print);

// Using hgetall, print to console the value of HolbertonSchools

client.hgetall(hash, (err, res) => {
    console.log(res);
});


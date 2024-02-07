//Use hset to store data

import { createClient } from 'redis';
import redis from 'redis';

const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server')
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

client.hgetall(hash, (err, res) => {
    console.log(res);
});

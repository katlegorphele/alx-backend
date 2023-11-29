import { createClient } from 'redis';

// script must connect to redis server

const client = createClient();

client.on('connect', () => {
	console.log('Redis client connected')
});

client.on('error', (err) => {
	console.log(`Something went wrong ${err}`)
});


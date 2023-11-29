import { createClient } from 'redis';

const client_connect = () => {
	const client = createClient();
	client
	    .on('connect', () => {
	        cossole.log('Redis client connected to the server');
	    })
	    .on('error', (err) , => {
	        console.log('Redis client error', err)
	    });
};
	
//await client.set('key','value');
clientConnect();


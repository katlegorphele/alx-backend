import { createClient } from 'redis';

const { promisify } = require('util');
const client = createClient();
const getAsync = promisify(client.get).bind(client);

client.on('connect', () => {
	console.log('Redis client connected')
});

client.on('error', (err) => {
	console.log(`Something went wrong ${err}`)
});

const setNewSchool = (schoolName, value) => {
    client.set(schoolName, value, (err, reply) => {
        console.log(`Reply: ${reply}`);
    });
}

const displaySchoolValue = async (schoolName) => {
    try {
        const reply = await getAsync(schoolName);
        // log Replay: 
        console.log(reply);
    } catch (err) {
        console.log(err);
    }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

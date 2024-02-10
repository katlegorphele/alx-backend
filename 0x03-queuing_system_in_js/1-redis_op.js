import { createClient } from 'redis';

const client = createClient();

client.on('connect', () => {
	console.log('Redis client connected')
});

client.on('error', (err) => {
	console.log(`Something went wrong ${err}`)
});

const setNewSchool = (schoolName, value) => {
    client.set(schoolName, value, (err, reply) => {
        console.log(reply);
    });
}

const displaySchoolValue = (schoolName) => {
    client.get(schoolName, (err, reply) => {
        console.log(reply);
    });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

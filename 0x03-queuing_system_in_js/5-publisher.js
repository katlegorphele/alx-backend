import { createClient, print } from "redis";

const client = createClient();

const redisConnect = () => {
    client
        .on('connect', () => {
            print('Redis client connected to the server');
        })
        .on('error', (err) => {
            print(`Redis client not connected to the server: ${err}`);
        });
}
redisConnect();

const publishMessage = (message, time) => {
    setTimeout(() => {
        print(`About to send ${message}`);
        client.publish('holberton school channel', message);
    })
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);

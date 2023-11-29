import { createClient,print } from "redis";
import redis from "redis";


const client = createClient();

const redis_connect = () => {
    client.on("connect", () => {
        print("Redis client connected");
        });

    client.on("error", (err) => {
        print(`Something went wrong ${err}`);
        }
    );
};
redis_connect();

client.subscribe('holberton school channel');

client.on('message', (channel, message) => {
    if (message === 'KILL_SERVER') {
        client.unsubscribe('holberton school channel');

        client.quit();
    } else {
        console.log(message);
    }
});





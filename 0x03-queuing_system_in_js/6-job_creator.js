// Create a queue with Kue

import { createQue } from 'kue'
import { print } from 'redis'

const queue = createQue()

const jobData = {
    phoneNumber: '+27681976458',
    message: 'Hello, world!'
};

const job = queue.create('push_notification_code', jobData).save((err) => {
    if (err) {
        throw new Error('Notification job failed')
    } else {
        print(`Notification job created: ${job.id}`)
    }
});

job.on('complete', () => {
    print(`Notification job completed`);
});

job.on('failed', (err) => {
    print(`Notification job failed: ${err}`);
});
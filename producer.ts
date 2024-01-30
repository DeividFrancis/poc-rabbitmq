import { connection } from "./connection";

const queue = "message";
const channel = await connection.createChannel();
await channel.assertQueue(queue, { durable: false });

let count = 0;

setInterval(() => {
	const message = `message ${++count}`;
	const isOk = channel.sendToQueue(queue, Buffer.from(message));
	console.log("🚀 Send", message);
}, 2000);

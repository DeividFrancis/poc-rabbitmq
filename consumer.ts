import type { Message } from "amqplib";
import { connection } from "./connection";

const queue = "message";
const channel = await connection.createChannel();

channel.consume(queue, async (msg) => {
	// fake delay
	await delay();

	// 70% probality of getting true
	if (Math.random() < 0.5) {
		channel.ack(msg as Message);
		console.log("✅ Received", msg?.content.toString());
	} else {
		channel.reject(msg as Message);
		console.log("❌ Reject", msg?.content.toString());
	}
});

const delay = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(true), 3000);
	});
};

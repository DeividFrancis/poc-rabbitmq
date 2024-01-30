import amqplib, { type Connection } from "amqplib";
import { env } from "./envs";

async function createConnection(): Promise<Connection> {
	try {
		const conn = await amqplib.connect(
			`amqp://${env.RABBITMQ_USER}:${env.RABBITMQ_PASS}@${env.RABBITMQ_HOST}`,
		);
		console.log("RabbitMQ started");
		return conn;
	} catch (error) {
		console.error("Fail to connect");
		throw error;
	}
}
export const connection = await createConnection();

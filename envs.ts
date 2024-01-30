import z from "zod";

const envSchema = z.object({
	RABBITMQ_USER: z.string(),
	RABBITMQ_PASS: z.string(),
	RABBITMQ_HOST: z.string(),
});

export const env = envSchema.parse(process.env);

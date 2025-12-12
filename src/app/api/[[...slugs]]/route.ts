import { redis } from "@/lib/redis";
import { Elysia } from "elysia";
import { nanoid } from "nanoid";

// TODO move to const
const ROOM_TTL_EXPIRED = 60 * 10;

const room = new Elysia({ prefix: "/room" }).post("/create", async () => {
    const roomId = nanoid();

    await redis.hset(`meta:${roomId}`, {
        connected: [],
        createdAt: Date.now(),
    });

    await redis.expire(`meta:${roomId}`, ROOM_TTL_EXPIRED);

    return { roomId };
});

const app = new Elysia({ prefix: "/api" }).use(room);

export const GET = app.fetch;
export const POST = app.fetch;

export type app = typeof app;

import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

// TODO change after deploy
export const client = treaty<App>(
    "https://real-time-chat-orcin.vercel.app/",
).api;

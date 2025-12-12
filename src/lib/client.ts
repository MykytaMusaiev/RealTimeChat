import { treaty } from "@elysiajs/eden";
import type { app } from "../app/api/[[...slugs]]/route";

// TODO change after deploy
export const client = treaty<app>("localhost:3000").api;

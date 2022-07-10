import { serve } from "https://deno.land/std/http/server.ts";
import {
  createRouteMap,
  createRouter,
} from "https://deno.land/x/reno/reno/mod.ts";

const routes = createRouteMap([
  ["/", () => new Response("Hello, Bench!")],
]);

const router = createRouter(routes);

await serve((req) => router(req), {
  port: 8000,
});
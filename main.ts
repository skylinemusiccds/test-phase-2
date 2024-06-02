// index.ts
import { serveStatic } from "https://deno.land/x/serve_static/mod.ts";

addEventListener("fetch", async (event) => {
  const response = new Response(await serveStatic(event.request, "public"), {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
  event.respondWith(response);
});

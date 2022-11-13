import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import socketHandlers from "./modules/socket-handlers/index.ts";
import inMemoryUserManager from "./modules/in-memory-user-manager/index.ts";

const io = new Server();

io.on("connection", (socket) => {
    socketHandlers.handleUserConnections(socket, inMemoryUserManager);
    socketHandlers.handleIoEmitLog(socket, io);
});

await serve(io.handler(), {
    port: 3000,
});

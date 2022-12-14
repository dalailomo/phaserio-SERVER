import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import socketHandlers from "./modules/socket-handlers/index.ts";
import inMemoryUserManager from "./modules/in-memory-user-manager/index.ts";
import inMemoryPlayerDataManager from "./modules/in-memory-player-data-manager/index.ts";

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    socketHandlers.handleUserConnections(socket, inMemoryUserManager);
    socketHandlers.handleIoEmitLog(socket, io);
    socketHandlers.handlePlayerData(socket, inMemoryPlayerDataManager);
});

await serve(io.handler(), {
    port: 3001,
});

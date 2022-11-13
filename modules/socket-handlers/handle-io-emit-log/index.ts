import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import { Socket } from "https://deno.land/x/socket_io@0.1.1/packages/socket.io/lib/socket.ts";

const EVENT = {
    SE_LogMessage: "handle-io-emit-log:server-emits:log-message",
    CE_LogMessage: "handle-io-emit-log:client-emits:log-message",
};

export const handleIoEmitLog = (socket: Socket, io: Server) => {
    socket.on(EVENT.CE_LogMessage, (payload: string) => {
        io.emit(EVENT.SE_LogMessage, payload);
    });
};

export const HANDLE_IO_EMIT_LOG_EVENT = EVENT;

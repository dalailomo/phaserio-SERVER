import { Socket } from "https://deno.land/x/socket_io@0.1.1/packages/socket.io/lib/socket.ts";
import { UserManager } from "../../in-memory-user-manager/types.d.ts";

const EVENT = {
    SB_ConnectedUsers:
        "handle-user-connections:socket-broadcast:get-connected-users",
    CE_ConnectedUsers:
        "handle-user-connections:client-emits:get-connected-users",
};

export const handleUserConnections = (
    socket: Socket,
    { addUser, removeUser, getConnectedUsers }: UserManager
) => {
    const name = socket.handshake.query.get("name");
    if (!name) return;

    addUser({ id: socket.id, name });
    socket.broadcast.emit(EVENT.SB_ConnectedUsers, getConnectedUsers());

    socket.on("disconnect", () => {
        removeUser(name);
        socket.broadcast.emit(EVENT.SB_ConnectedUsers, getConnectedUsers());
    });

    socket.on(EVENT.CE_ConnectedUsers, () => {
        socket.emit(EVENT.SB_ConnectedUsers, getConnectedUsers());
    });
};

export const HANDLE_USER_CONNECTIONS_EVENT = EVENT;

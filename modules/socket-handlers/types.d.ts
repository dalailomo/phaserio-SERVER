import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import { Socket } from "https://deno.land/x/socket_io@0.1.1/packages/socket.io/lib/socket.ts";
import { UserManager } from "./handle-user-connections/types.d.ts";
import { PlayerDataManager } from "./handle-player-data/types.d.ts";

export interface ModuleDefinition {
    handleUserConnections: (socket: Socket, userManager: UserManager) => void;
    handleIoEmitLog: (socket: Socket, io: Server) => void;
    handlePlayerData: (
        socket: Socket,
        playerDataManager: PlayerDataManager
    ) => void;
}

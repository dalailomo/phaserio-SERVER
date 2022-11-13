import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";
import { Socket } from "https://deno.land/x/socket_io@0.1.1/packages/socket.io/lib/socket.ts";
import { UserManager } from "../in-memory-user-manager/types.d.ts";
import { PlayerDataManager } from "../in-memory-player-data-manager/types.d.ts";

export interface ModuleDefinition {
    handleUserConnections: (socket: Socket, userManager: UserManager) => void;
    handleIoEmitLog: (socket: Socket, io: Server) => void;
    handlePlayerData: (
        socket: Socket,
        playerDataManager: PlayerDataManager
    ) => void;
}

import { ModuleDefinition } from "./types.d.ts";
import { handleUserConnections } from "./handle-user-connections/index.ts";
import { handleIoEmitLog } from "./handle-io-emit-log/index.ts";
import { handlePlayerData } from "./handle-player-data/index.ts";

export default {
    handleUserConnections,
    handleIoEmitLog,
    handlePlayerData,
} as ModuleDefinition;

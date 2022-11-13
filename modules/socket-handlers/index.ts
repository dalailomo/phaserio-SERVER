import { ModuleDefinition } from "./types.d.ts";
import { handleUserConnections } from "./handle-user-connections/index.ts";
import { handleIoEmitLog } from "./handle-io-emit-log/index.ts";

export default {
    handleUserConnections,
    handleIoEmitLog,
} as ModuleDefinition;

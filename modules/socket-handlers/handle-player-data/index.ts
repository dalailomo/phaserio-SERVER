import { Socket } from "https://deno.land/x/socket_io@0.1.1/packages/socket.io/lib/socket.ts";
import {
    PlayerDataManager,
    Player,
    NewPlayerState,
} from "./types.d.ts";

const EVENT = {
    SB_NewPlayerState: "handle-player-data:socket-broadcast:new-player-state",
    CE_AddPlayer: "handle-player-data:client-emits:add-player",
    CE_RemovePlayer: "handle-player-data:client-emits:remove-player",
    CE_UpdatePlayerData: "handle-player-data:client-emits:update-player-data",
    CE_GetCurrentPlayerState:
        "handle-player-data:client-emits:get-current-player-state",
};

export const handlePlayerData = (
    socket: Socket,
    {
        addPlayer,
        removePlayer,
        updatePlayerState,
        getCurrentPlayerState,
    }: PlayerDataManager
) => {
    socket.on(EVENT.CE_AddPlayer, (player: Player) => {
        addPlayer(player);
    });

    socket.on(EVENT.CE_RemovePlayer, (id: string) => {
        removePlayer(id);
    });

    socket.on(EVENT.CE_UpdatePlayerData, (newPlayerState: NewPlayerState) => {
        updatePlayerState(newPlayerState);
    });

    socket.on(EVENT.CE_GetCurrentPlayerState, (id: string) => {
        socket.broadcast.emit(
            EVENT.SB_NewPlayerState,
            getCurrentPlayerState(id)
        );
    });
};

export const HANDLE_PLAYER_DATA_EVENT = EVENT;

import { NewPlayerState, Player, PlayerDataManager } from "./types.d.ts";

const players: { [key: string]: Player } = {};

const addPlayer = (player: Player) => {
    players[player.id] = player;
};

const removePlayer = (name: string) => {
    delete players[name];
};

const updatePlayerState = (params: NewPlayerState) => {
    players[params.id].state = params.newState;
};

const getCurrentPlayerState = (id: string) => players[id]?.state;

export default {
    addPlayer,
    removePlayer,
    updatePlayerState,
    getCurrentPlayerState,
} as PlayerDataManager;

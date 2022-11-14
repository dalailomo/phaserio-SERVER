export interface Player {
    id: string;
    name: string;
    state: PlayerState;
}

export interface PlayerState {
    x: number;
    y: number;
    rotation: number;
}

export interface NewPlayerState {
    id: string;
    newState: PlayerState;
}

export interface PlayerDataManager {
    addPlayer: (player: Player) => void;
    removePlayer: (id: string) => void;
    updatePlayerState: (newPlayerState: NewPlayerState) => void;
    getCurrentPlayerState: (id: string) => PlayerState;
}

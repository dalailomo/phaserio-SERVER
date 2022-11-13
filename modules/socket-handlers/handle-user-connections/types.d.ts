import { User } from "../../in-memory-user-manager/types.d.ts";

export interface UserManager {
    addUser: (user: User) => void;
    removeUser: (name: string) => void;
    getConnectedUsers: () => ConnectedUsers;
}

export type ConnectedUsers = { [key: string]: User };

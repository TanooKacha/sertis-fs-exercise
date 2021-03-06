import {Identifier} from "../../../../libs/domain-driven/interfaces/repository.interface";

export interface UserState {
    id: Identifier
    name: string
}

export interface WritableUserState extends UserState {
    password: string
}
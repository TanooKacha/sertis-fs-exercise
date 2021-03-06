import {Identifier} from "../../../libs/domain-driven/interfaces/repository.interface";

export interface AuthenticateRequestBody {
    id: Identifier
    password: string
}

export interface UserRequestBody {
    id: Identifier
    name: string
    password?: string
}

export interface AuthorizeRequestQuery {
    token: string;
}

import {ACTION_TYPE} from "../services/constants";
import {UserDTO} from "./APITypes";

export interface User {
    id: string;
    name: string;
    role: string;
    loggedIn: true;
}

export type PotentialUser = User | {loggedIn: false; requesting: boolean}

export type UserActions =
    | {type: ACTION_TYPE.USER_LOG_IN_REQUEST}
    | {type: ACTION_TYPE.USER_LOG_IN_RESPONSE_SUCCESS, user: UserDTO}
    | {type: ACTION_TYPE.USER_UPDATE_RESPONSE_SUCCESS, user: UserDTO}
    | {type: ACTION_TYPE.USER_DETAILS_UPDATE_RESPONSE_SUCCESS, user: UserDTO}
    | {type: ACTION_TYPE.USER_UPDATE_RESPONSE_FAILURE}
    | {type: ACTION_TYPE.USER_LOG_OUT_RESPONSE_SUCCESS}
    | {type: ACTION_TYPE.USER_LOG_OUT_EVERYWHERE_RESPONSE_SUCCESS}

export type Action = UserActions

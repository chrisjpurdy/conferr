import {PotentialUser, Action} from "../../app/types";
import {ACTION_TYPE} from "../../services/constants";

type UserState = PotentialUser | null;
export const user = (user: UserState = null, action: Action): UserState => {
    switch (action.type) {
        case ACTION_TYPE.USER_LOG_IN_REQUEST:
            return {loggedIn: false, requesting: true};
        case ACTION_TYPE.USER_LOG_IN_RESPONSE_SUCCESS:
        case ACTION_TYPE.USER_UPDATE_RESPONSE_SUCCESS:
        case ACTION_TYPE.USER_DETAILS_UPDATE_RESPONSE_SUCCESS:
            return {loggedIn: true, ...action.user};
        case ACTION_TYPE.USER_UPDATE_RESPONSE_FAILURE:
        case ACTION_TYPE.USER_LOG_OUT_RESPONSE_SUCCESS:
        case ACTION_TYPE.USER_LOG_OUT_EVERYWHERE_RESPONSE_SUCCESS:
            return {loggedIn: false, requesting: false};
        default:
            return user;
    }
};
import {Action, combineReducers} from "@reduxjs/toolkit";
import {user} from "./user";
import {ACTION_TYPE} from "../../services/constants";

const appReducer = combineReducers({
    user
});

export type AppState = ReturnType<typeof appReducer> | undefined;

export const rootReducer = (state: AppState, action: Action) => {
    // TODO check consistency of user?
    if (action.type === ACTION_TYPE.USER_LOG_OUT_RESPONSE_SUCCESS || action.type === ACTION_TYPE.USER_LOG_OUT_EVERYWHERE_RESPONSE_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};
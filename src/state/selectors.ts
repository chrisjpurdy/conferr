import {AppState} from "./reducers";

export const selectors = {
    user: {
        orNull: (state: AppState) => state?.user ?? null
    }
}
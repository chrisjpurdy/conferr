import {configureStore, Store, ThunkDispatch, AnyAction} from '@reduxjs/toolkit';
import {AppState, rootReducer} from "./reducers";

// TODO maybe check for how isaac-react-app handles consistency
//  of current user

export const store: Store = configureStore({
  reducer: rootReducer
});

//export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<AppState, never, AnyAction>

/*
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;
*/
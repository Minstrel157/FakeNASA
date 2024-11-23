import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoDayReducer from "../../pages/PhotoDay/api/PhotoDaySlice"

const rootReducer = combineReducers({
    photoDayReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
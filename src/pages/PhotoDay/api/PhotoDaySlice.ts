import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhotoDay } from "../models/IPhotoDay"

interface PhotoDayState{
    photoDay: IPhotoDay;
    isLoading: boolean;
    error: string;
}

const initialState: PhotoDayState = {
    photoDay: {
        title: "",
        date: "",
        explanation: "",
        hdurl: ""
    },
    isLoading: false,
    error: ""
}

export const photoDayslice = createSlice({
    name: "photoDaySlice",
    initialState: initialState,
    reducers: {
        photoDayFetching(state){
            state.isLoading = true
        },
        photoDayFetchingSuccess(state, action: PayloadAction<IPhotoDay>){
            state.isLoading = false
            state.error = ''
            state.photoDay = action.payload
        },
        photoDayFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default photoDayslice.reducer
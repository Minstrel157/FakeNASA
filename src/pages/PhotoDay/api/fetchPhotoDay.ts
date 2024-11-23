import axios from "axios"
import { AppDispatch } from "../../../app/store/store"
import { IPhotoDay } from "../models/IPhotoDay"
import { photoDayslice } from "./PhotoDaySlice"
export const fetchPhotoDay = () => async(dispatch: AppDispatch)=>{
    try{
        dispatch(photoDayslice.actions.photoDayFetching())
        const response = await axios.get<IPhotoDay>("https://api.nasa.gov/planetary/apod?api_key=kYE5SvZaA2zbkTrNfpDfeLXLAD3yXXaDyZlIdTVB")
        dispatch(photoDayslice.actions.photoDayFetchingSuccess(response.data))
      }
      catch (error) {
        console.error("Ошибка при загрузке данных:", error);

        const errorMessage = axios.isAxiosError(error) && error.response
            ? `Ошибка: ${error.response.status} - ${error.response.data}`
            : "Неизвестная ошибка";

        dispatch(photoDayslice.actions.photoDayFetchingError(errorMessage));
    }
}
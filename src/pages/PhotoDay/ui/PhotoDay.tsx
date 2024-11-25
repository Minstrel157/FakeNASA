import  { FC, useEffect } from "react";
import styles from "./PhotoDay.module.scss"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/redux";
import { fetchPhotoDay } from "../api/fetchPhotoDay";
const PhotoDay: FC = () =>
{
    const dispatch = useAppDispatch()
    const {photoDay, isLoading, error} = useAppSelector(state => state.photoDayReducer)

    useEffect(() =>{
        dispatch(fetchPhotoDay())
    }, [])

    return(
        <div className={styles.PhotoDayContainer}>
            {isLoading && <h1>Идет загрузка</h1>}
            {error && <h1>{error}</h1>}
            <h1>Асрономическая картина дня</h1>
            <p>{photoDay.date}</p>
            <a href=""></a>
            <img src={photoDay.hdurl} alt=""  />
        </div>
    )
}

export default PhotoDay
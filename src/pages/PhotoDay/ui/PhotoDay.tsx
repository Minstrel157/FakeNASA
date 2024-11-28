import  { FC, useEffect } from "react";
import styles from "./PhotoDay.module.scss"
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/redux";
import { fetchPhotoDay } from "../api/fetchPhotoDay";
import NavBar from "../../../widgets/NavBar/ui/NavBar";
import LinkPage from "../../../shared/LinkPage/LinkPage";

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

            <NavBar content={[
                <LinkPage path="/" children="Главное меню"/>,
                <LinkPage path="/" children="Погода на марсе" />
            ]}/>
            
            {!isLoading && !error && (
                <>
                    <h1>Астрономическая картина дня</h1>
                    <p>{photoDay.date}</p>
                    <span>{photoDay.explanation}</span>
                    <img src={photoDay.hdurl} alt="Ошибка загрузки" />
                </>
            )}

        </div>
    )
}

export default PhotoDay
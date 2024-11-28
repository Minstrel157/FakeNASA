import styles from "./MarsWeather.module.scss"
import NavBar from "../../../widgets/NavBar/ui/NavBar";
import LinkPage from "../../../shared/LinkPage/LinkPage";
import { useEffect, useState } from "react";
import axios from "axios";
const MarsWeather = () =>
{
    const[data, setData] = useState(null)
    useEffect(()=>{
        try{
            const fetchWeather = async() =>
            {
                const response = await axios.get("https://api.nasa.gov/insight_weather/?api_key=kYE5SvZaA2zbkTrNfpDfeLXLAD3yXXaDyZlIdTVB&feedtype=json&ver=1.0")
                setData(response.request)  
            }
            fetchWeather()
            console.log(data)
        } 
        catch(e){
            
        }
    }, [])
    return(
        <div className={styles.MarsWeatherContainer}>
            <NavBar content={[
                <LinkPage path="/" children="Главная страница"/>,
                <LinkPage path="/dayPhoto" children="Фото дня"/>
            ]}/>
        </div>
    )
}

export default MarsWeather
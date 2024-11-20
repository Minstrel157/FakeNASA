import axios from "axios"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import FotoDay from "./pages/FotoDay/FotoDay"
function App() {
  // const [image, setImage] = useState([])

  // useEffect(() => {
  //   const fetchImage = async() =>
  //   {
  //     try{
  //       const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=kYE5SvZaA2zbkTrNfpDfeLXLAD3yXXaDyZlIdTVB")
  //       setImage(response.data)
  //     }
  //     catch(e){
  //       console.log(e)
  //     }
  //   }
  //   fetchImage()
  // },[])

  // console.log(image)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/dayFoto" element={<FotoDay/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

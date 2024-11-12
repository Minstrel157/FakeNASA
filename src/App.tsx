import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [image, setImage] = useState([])

  useEffect(() => {
    const fetchImage = async() =>
    {
      try{
        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=kYE5SvZaA2zbkTrNfpDfeLXLAD3yXXaDyZlIdTVB")
        setImage(response.data)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchImage()
  },[])

  console.log(image)
  return (
    <></>
  )
}

export default App

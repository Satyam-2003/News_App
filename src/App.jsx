import { useState } from "react"
import Navbar from "./Compnents/Navbar"
import NewsBoard from "./Compnents/NewsBoard"
import NewsItem from "./Compnents/NewsItem"

const App = () => {
  
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <NewsItem/>

    </div>
  )
}

export default App

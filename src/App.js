import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import theme from "./theme";
import { fetchPhotos } from "./api";
function App() {
  // use class "'dark-mode' to change theme"
  const [ photos, setPhotos ] = useState([])
  
  useEffect(() => {
    
    setPhotos(fetchPhotos(30, 1))
  }, [])
  console.log(photos);
  return (
    <div className={theme.config.initialColorMode}>
      <Header />
      <List />
    </div>
  );
}

export default App;

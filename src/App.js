import React, {useEffect, useState} from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

function App() {

  const [data, setData] = useState([]);
  const [showMore, setShow] = useState(false);

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=uoNlkISl6qXGmaDiaQ4raq2aOkNW6lYU72q4PWms&count=10")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []) 

  function openCaption(){
    setShow(true)
    setTimeout(() =>{
      setShow(false)
    }, 5000)
  }

  function loadMore(){
    window.location.reload(false)
  }
  
  return (
    <div className="App">

    <Header />
     <div className=" flex flex-col justify-center items-center gap-10">
      
    {data.map((nasaData, index) =>{
      const capt = nasaData.explanation;
      const truncated = capt.substring(0,100)
      return(
        <Card
        id={index}
        title={nasaData.title}
        img={nasaData.hdurl}
        explanation={showMore ? capt : truncated}
        onClick={openCaption}
        copyright={nasaData.copyright} />
      )
    })}

     </div>
    <Footer 
      onClick={loadMore}
    />
    </div>
  );

}

export default App;

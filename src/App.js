import './App.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import DisplayPhotos from './DisplayPhotos';

function App() {
  
  const [ allPhotos, setAllPhotos ] = useState("");
  

 const handleClick = () => {
  axios({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "GET",
    dataResponse: "json",
    params: {
      format: "json",
    },
  }).then((response) => {
   setAllPhotos(response.data.message)
   console.log(response.data.message)

  })
 }

  return (
    <div className="App">
      <Header />

      
      <button onClick={handleClick}>Show me a random dog</button>
      <section className='photoDisplay'>
      {
        allPhotos
          ? <img src={allPhotos} alt="" />
          : null
      }
      </section>

     {/* <DisplayPhotos  /> */}

      <Footer />

    </div>
  );
}

export default App;


//1 put API info in state
//map over our state and create a HTML item for each one
//
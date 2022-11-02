import './App.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';//Remove unused  useEffects
import DisplayPhotos from './DisplayPhotos';//Unused component

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
   console.log(response.data.message)//Remove console.log

  })
 }

  return (
    <div className="App">
      <Header />
      {/*Try to make a better HTML structure here maybe Matthew, this button has no parent element*/}
      <button onClick={handleClick}>Show me a random dog</button>
      <section className='photoDisplay'>
      {
        allPhotos
          ? <img src={allPhotos} alt="" />//Probably get the alt text from the api photo description
          : null
      }
      </section>

     {/* <DisplayPhotos  /> */}{/*keep working on this Matt you just need to create a useEffect with a dependency when a dropdown menu changes state and make your axios request inside of it*/ }

      <Footer />

    </div>
  );
}

export default App;


//1 put API info in state
//map over our state and create a HTML item for each one
//
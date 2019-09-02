import React , {useState,useEffect} from 'react';
import axios from 'axios';
import StarWars from '../src/components/StartWars'
import './App.css';





const App = () => {
  const [data,setData]=useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get("https://swapi.co/api/people/?page=2")

    .then(response =>
      // console.log(response)
      setData(response.data.results)
      )

  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(e=><StarWars info={`${e.name} ,  ${e.birth_year} ,  ${e.hair_color} `}/>)}
    </div>
  );
}

export default App;



import {fireEvent} from '@testing-library/react';
import {useEffect, useState} from 'react';
import Header from '../components/Header/Header';

import './App.css';
// import './Header.js'
{/* <script src="./Header.js"></script> */}



function App() {
 
  return (
  
    <div className="App">
 <Geader></Geader>
 <Header></Header>
    </div>
  );
}
 
function Geader(){
  return(
    <div>
      <h1>Header</h1>
    </div>
  )
}













// function LoadCountries(){
//   //usestate e jehetu array pabo tai akta empty array [] dilam.
//   const [countries,setCountries]=useState([]);
//   useEffect(function(){
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])

//   return(
//     <div className='check'>
//       <h2>search your favourite Country</h2>
//       <h3>Avalaible Countries{countries.length}</h3>
//      <div className='style2'>
//      {
//          countries.map(country=><Country name={country.name.common} population={country.population}></Country>)
//       }
//      </div>
//     </div>
//   )

// }
// jotota alada section toiri korte hobe section er jaigai component bosate hobe.karon hocche map theke 1tar beshi kichu return kora jai na.akdom prothom component ke main component er vetore call dite hobe
// function Country(props){
//   return(
//     <div className='style'>
//       <div className="card">
//         <h2>Name:{props.name}</h2>
//         <h4>population:{props.population}</h4>

        

//       </div>
//     </div>
//   )
// }

export default App;
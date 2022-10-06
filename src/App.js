import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
 import Junkbox from './Junkbox'

 function App() {
  function getData(val) {
    console.log(val.target.value)
  }
  return (
   <>
    <Junkbox onBlur={getData} />
    <input type="text" id="xxx" onBlur={getData} />
    <button variant="primary" type="submit">
    </button>
   </> 
  )
} 

export default App;
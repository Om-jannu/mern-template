// import React, { useState } from "react";

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };
//   return (
//     <div>
//       This was made from Scratch! Also hello world!
//       <button onClick={increment}>Increment</button>
//       {counter}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Home from '../src/components/homeComponent/Home';
import PageNotFound from "../src/components/pageNotFound/PageNotFound"
import { Route,Routes } from "react-router";
const App= ()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App;

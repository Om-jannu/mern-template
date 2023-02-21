import './App.css';
import Home from './components/Home';
import PageNotFound from "./components/PageNotFound";
import { Route,Routes } from "react-router";
const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default App;

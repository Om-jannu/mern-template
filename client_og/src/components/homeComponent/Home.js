import React from "react";
import "./homeStyle.css";
import { useEffect, useState } from "react";
const Home=()=> {
  const [data , setData] = useState("");
  useEffect(() => {
    fetch('http://localhost:5000/test')
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw response;
    })
    .then(json_data =>{
      setData(json_data)
    })
    .catch(error =>{
      console.error(`error while fetching api data :${error}`);
    })
  }, [])
  
  return (
    <>
        <div className='homecss'>
            <p>WELCOME MERN DEVELOPER</p>
            <br />
            <div className="api_msg">
              {data ? data.msg :"server not started 😣"}
            </div>
        </div>
    </>
  )
}

export default Home;
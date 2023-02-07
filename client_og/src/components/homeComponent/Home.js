import React from "react";
import "./homeStyle.css";
import { useEffect, useState } from "react";
// const url = require("url")
const Home = () => {
  const [data, setData] = useState("");
  console.log(setData);
  useEffect(() => {
    const toSearch = "3000";
    const myURL = window.location.href;
    const target = myURL.indexOf("3000");
    const firstPart = myURL.substring(0, target);
    const secondPart = myURL.substring(target + toSearch.length, myURL.length)
    if (myURL.includes("3000")) {
      if(myURL.endsWith("/")){
        var url = firstPart + "5000" + secondPart+"test";
      }else{
        var url = firstPart + "5000" + secondPart+"/test";
      }
    }
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(json_data => {
        setData(json_data)
      })
      .catch(error => {
        console.error(`error while fetching api data :${error}`);
      })
  }, [])

  return (
    <>
      <div className='homecss'>
        <p>WELCOME MERN DEVELOPER</p>
        <br />
        <div className="api_msg">
          {data ? data.msg : "server not started 😣"}
        </div>
      </div>
    </>
  )
}

export default Home;
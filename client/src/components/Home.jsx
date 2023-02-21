import "./homeStyle.css";
import { useEffect, useState } from "react";
import logo from "../media/images/mernlogo.png";
const Home = () => {
  const [data, setData] = useState("");
  console.log(setData);
  useEffect(() => {
    // code to convert client url to server url
    const myClientURL = window.location.href;
    console.log(myClientURL);
    const myServerURL = myClientURL.replace("3000", "5000");
    var server_url;

    if (myServerURL.charAt(myServerURL.length - 1) === "/") {
      server_url = myServerURL + "test";
      console.log(server_url);
    } else {
      server_url = myServerURL + "/test";
      console.log(server_url);
    }
    // fetching server url
    fetch(server_url) 
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
        <img src={logo} alt="mern logo" />
        <p>👋HEYY <span style={{color:"green"}}>M</span><span style={{color:"pink"}}>E</span><span style={{color:"cyan"}}>R</span><span style={{color:"greenyellow"}}>N</span> DEVELOPER !!</p>
        <div className="api_msg">
          {data ? data.msg : "server not started 😣"}
        </div>
      </div>
    </>
  )
}

export default Home;
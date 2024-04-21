// Importing necessary modules and styles
import React, { useEffect, useState } from "react";
import axios from "axios"; // Using axios for API requests
import logo from "../media/images/mernlogo.png";
import "./homeStyle.css";

// Functional component for Home page
const Home = () => {
  // State to hold data from API
  const [data, setData] = useState("");

  // Fetching data from the server on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API endpoint URL
        const serverUrl = process.env.REACT_APP_SERVER_URL || "http://localhost:5000";
        // Fetching data from the server
        const response = await axios.get(`${serverUrl}/test`);
        setData(response.data); // Setting API response data to state
      } catch (error) {
        console.error(`Error while fetching API data: ${error.message}`);
      }
    };
    fetchData(); // Calling the fetchData function
  }, []);

  return (
    <>
      <div className="homecss">
        <img src={logo} alt="MERN logo" />
        <p>
          👋 HEYY{" "}
          <span style={{ color: "green" }}>M</span>
          <span style={{ color: "pink" }}>E</span>
          <span style={{ color: "cyan" }}>R</span>
          <span style={{ color: "greenyellow" }}>N</span> DEVELOPER !!
        </p>
        <div className="api_msg">
          {data ? data.msg : "Server not started 😣"}
        </div>
      </div>
    </>
  );
};

export default Home;

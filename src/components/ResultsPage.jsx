import React, { useEffect, useState } from "react";
import axios from "axios";
import {youtubeData} from "../constant.js"
import brandlogo from "../assets/brand.png";


import { useLocation } from "react-router-dom";

function ResultsPage() {
  const { state : videoId } = useLocation();

  let API_KEY="AIzaSyDT6zgDb9SGp8F2iNASKZBOwsUbK7JWL3s"


  const [result, setResult] = useState([]);

  async function fetchData() {
    try {
      // let res=await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}` )
      // https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWX0cUR2rZcqKei1Vstww-A&key=AIzaSyDT6zgDb9SGp8F2iNASKZBOwsUbK7JWL3s

      // console.log(res.data.items);

      // setResult(res.data.items);
      setResult(youtubeData.items.statistics);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  let handleSubmit=()=>{
    
  }
  return (

    <div>
       <header className="mb-8 flex  bg-yellow-200">
        <img src={brandlogo} alt="Brand Icon" className="logo w-8 h-8" />
        <h1 className="brand p-2">anchor</h1>
        <button className="bg-red-500 text-yellow-100">request call back</button>
      </header>

      <form onSubmit={handleSubmit}>
        <div>
          <h2>Request a callBack</h2>
        
          <input type="text" placeholder="Enter Name"/>
          <br />
          <input type="number" placeholder="Mobile Number " />
          <br />
          <button type="submit">Request a Call Back</button>
        </div>
      </form>

    </div>

  ) 
}

export default ResultsPage;

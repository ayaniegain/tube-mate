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
        <header className="mb-8 d-flex justify-content-around ">
          <div className="d-flex">

        <img src={brandlogo} alt="brand-icon" className="brand-icon" />
        <h1 className="brand-text text-light ">anchors <sup className="suffix">Beta</sup></h1>
          </div>
        <button class="request-call-back-btn">Request a Call Back</button>
      </header>

  <div className="container">
  <div className="row">
    {/* Left-side card with two parts */}
    <div className="col-md-6">
      <div className="card">
        <div className="row">
          {/* First part */}
          <div className="col-md-6">
            <div className="card-body">
              <span>Some text</span>
              <img src="your-image.jpg" className="card-img-top" alt="Image" />
              <p className="card-text">Image description</p>
            </div>
          </div>
          {/* Second part */}
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Image Title</h5>
              <p className="card-text">Sub Count: 1000</p>
              <p className="card-text">Comment Count: 500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Right-side card */}
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Number</h2>
          <button className="btn btn-primary">Click me</button>
        </div>
      </div>
    </div>
  </div>
</div>




     
    </div>

  ) 
}

export default ResultsPage;

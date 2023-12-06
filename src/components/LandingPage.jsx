import React, { useState } from "react";
import brandlogo from "../assets/brand.png";
import frame from "../assets/framebg.png";
import { useNavigate } from "react-router-dom";

// console.log(youtubeData);
function LandingPage() {

  const navigate = useNavigate();
  let [url,setUrl]=useState("")

  
  let handleSubmit=(event)=>{
    event.preventDefault()
    
    
    const videoId = url.split("v=")[1].split("&")[0];
    // console.log(videoId);
    navigate("/results",{state:videoId});
    
  }
 
  return (
    <div>
      {/* Header Section */}
      <header className="mb-8 d-flex">
        {/* Replace 'path/to/your/icon.svg' with the actual path to your brand icon */}
        <img src={brandlogo} alt="brand-icon" className="brand-icon" />
        <h1 className="brand-text text-light ">anchors <sup className="suffix">Beta</sup></h1>
      </header>
      {/* Body Section */}
      <div className="text-center body-container">
        <h1 className="text-3xl font-bold mb-4">Discover your earning<br/> potential</h1>
        <p className="mb-8">
        Turn your Youtube expertise into a lucrative income <br/>
through resource sharing
        </p>
        {/* Input and Button Section */}
        <form onSubmit={handleSubmit} className="items-center form-container">
          <input
          required
            type="text"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
            placeholder="enter youtube video link"
            className="rounded-l-lg px-4 py-2 border-white border outline-none bg-black text-white"
          />
          <button className=" py-2 text-white container-button" type="submit" >
          Check Earning
          </button>
        </form>
      </div>
      <img style={{color:"red"}} src={frame} alt="Logo" className="logo"/>

    </div>
  );
}

export default LandingPage;

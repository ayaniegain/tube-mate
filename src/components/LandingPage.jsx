import React, { useEffect, useState } from "react";
import brandlogo from "../assets/brand.png";
import { youtubeData } from "../constant.js";
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
      <header className="mb-8 flex  bg-yellow-200">
        {/* Replace 'path/to/your/icon.svg' with the actual path to your brand icon */}
        <img src={brandlogo} alt="Brand Icon" className="logo w-8 h-8" />
        <h1 className="brand p-2">anchor</h1>
      </header>
      {/* Body Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Website</h1>
        <p className="mb-8">
          A few words about what makes us awesome. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        {/* Input and Button Section */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
          required
            type="text"
            value={url}
            onChange={(e)=>setUrl(e.target.value)}
            placeholder="Your Email"
            className="rounded-l-lg px-4 py-2 border-white border outline-none bg-black text-white"
          />
          <button className="bg-orange-500 rounded-r-lg px-6 py-2 text-white" type="submit" >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;

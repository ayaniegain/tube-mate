import React, { useEffect, useState } from "react";
import axios from "axios";
import { youtubeData } from "../constant.js";
import { youtubeSub } from "../constant.js";
import brandlogo from "../assets/brand.png";
// import badge from "../assets/badge.png";

import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom/dist/index.js";
import RequestCallBack from "./RequestCallBack.jsx";

function ResultsPage() {
  const { state: videoId } = useLocation();


  
  var  API_KEY2 = "AIzaSyDwMi2IPvGtSgzB7Fg0IprcWGByVFSYWMU"
    

 
  

  const [thumbnails, setThumbnails] = useState({});
  const [date, setDate] = useState("");
  const [earning, setEarning] = useState("");

  async function fetchData() {
    try {
      let res=await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY2}` )
      let sub=await axios.get(` https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWX0cUR2rZcqKei1Vstww-A&key=${API_KEY2}`)

     
      setThumbnails(res.data?.items[0]);
      //date
      const originalDate = (res.data)?.items[0].snippet.publishedAt;
      const dateObject = new Date(originalDate);

      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = dateObject.toLocaleDateString("en-US", options);

      setDate(formattedDate);

      // ESTIMATE earning
      // Earnings = min(subscriber count, views) + 10 * comments + 5 * likes
      {
        let subCount = parseInt(sub.data.items[0].statistics.subscriberCount);
        let viewCount = parseInt((res.data)?.items[0].statistics?.viewCount);

        let commentCount = parseInt(
          (res.data).items[0].statistics?.commentCount
        );
        let likeCount = parseInt((res.data).items[0].statistics?.likeCount);

        let earnings =
          Math.min(subCount, viewCount) + 10 * commentCount + 5 * likeCount;

        setEarning(earnings);
        // console.log(earnings);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  


  return (
    <div>
      
      <header className="mb-8">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-5">
        <NavLink to={"/"} className="d-flex align-items-center">
          <img src={brandlogo} alt="brand-icon" className="brand-icon" />
          <h1 className="brand-text text-light">
            anchors <sup className="suffix">Beta</sup>
          </h1>
        </NavLink>
      </div>
      <div className="col-6">
        <div className="d-flex justify-content-end">
          <RequestCallBack />
        </div>
      </div>
    </div>
  </div>
</header>
      

      <div className="container card-container">
        <div className="row">
          {/* Left-side card with two parts */}
          <div className="col-md-6">
            <div className="card">
              <div className="row">
                {/* First part */}
                <div className="col-md-6">
                  <div className="card-body d-flex row">
                    <div>
                      {/* <span className="badge"></span> */}
                      <span className="badge p-2"> Top earner video</span>
                    </div>
                    <img
                      src={thumbnails?.snippet?.thumbnails?.default?.url}
                      className="card-img-top mt-3 img "
                      alt="Image"
                    />
                    <p className="card-text text-secondary">Uploaded on - {date}</p>
                  </div>
                </div>
                {/* Second part */}
                <div className="col-md-6 sec-container">
                  <div className="card-body">
                    <h5 className="card-title h6 pb-2">
                      {thumbnails?.snippet?.title}
                    </h5>
                    <p className="card-text views ">
                    <span className="text-secondary">

                      {thumbnails?.statistics?.viewCount}
                      </span> 
                    </p>

                    <p className="card-text likes">
                    <span className="text-secondary">
                       {thumbnails?.statistics?.likeCount}
                      
                      </span> 
                    </p>
                    <p className="card-text comm">
                    <span className="text-secondary">

                      {thumbnails?.statistics?.commentCount}
                      </span> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right-side card */}
          <div className="col-md-6 right-container">
            <div className="card">
              <div className="card-body right-body">
                <h2 className="card-title">₹ {earning}</h2>
                <button className="btn btn-light mt-2 rounded-pill ">check how?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6" style={{backgroundColor: 'black', padding: 0, marginTop: 20}}>
  <h2 style={{color: '#FFFFFFB2', fontSize: "28px"}}>Other Videos Potentials</h2>
</div>



      {/* //table */}
      <div className="container mt-5">
  <table className="table custom-table" style={{ background: "#888", color: "#fff" }}>
    <thead style={{ textAlign: "center", fontWeight: "bold" }}>
      <tr style={{ textAlign: "center", fontWeight: "bold" }}>
        <th scope="col" style={{ width: 50 }}>
          Rank
        </th>
        <th scope="col" style={{ width: 150 }}>
          Title
        </th>
        <th scope="col" style={{ width: 100 }}>
          Thumbnail
        </th>
        <th scope="col" style={{ width: 100 }}>
          Views
        </th>
        <th scope="col" style={{ width: 100 }}>
          Likes
        </th>
        <th scope="col" style={{ width: 100 }}>
          Comments
        </th>
        <th scope="col" style={{ width: 150 }}>
          Uploaded on
        </th>
        <th scope="col" style={{ width: 150 }}>
          *Estimated Earning
        </th>
      </tr>
    </thead>
    <tbody style={{ textAlign: "center" }}>
      {/* Add your table rows here */}
      <tr>
        <td style={{ width: 50 }}>1</td>
        <td style={{ width: 150 }}>{thumbnails?.snippet?.title}</td>
        <td style={{ width: 100 }}>
          <img
            src={thumbnails?.snippet?.thumbnails?.default?.url}
            alt="Thumbnail 1"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </td>
        <td style={{ width: 100 }}>{thumbnails?.statistics?.viewCount}</td>
        <td style={{ width: 100 }}>{thumbnails?.statistics?.likeCount}</td>
        <td style={{ width: 100 }}>{thumbnails?.statistics?.commentCount}</td>
        <td style={{ width: 150 }}>{date}</td>
        <td style={{ width: 150 }}>{earning}</td>
      </tr>
      <tr>
        <td style={{ width: 50 }}>2</td>
        <td style={{ width: 150 }}>{thumbnails?.snippet?.title}</td>
        <td style={{ width: 100 }}>
          <img
            src={thumbnails?.snippet?.thumbnails?.default?.url}
            alt="Thumbnail 2"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </td>
        <td style={{ width: 100 }}>{thumbnails?.statistics?.viewCount}</td>
        <td style={{ width: 100 }}>{thumbnails?.statistics?.likeCount}</td>
        <td style={{ width: 100 }}>{thumbnails?.statistics?.commentCount}</td>
        <td style={{ width: 150 }}>{date}</td>
        <td style={{ width: 150 }}>{earning}</td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>




    </div>



  );
}

export default ResultsPage;

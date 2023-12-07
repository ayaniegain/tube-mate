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
 
  let API_KEY = "AIzaSyDT6zgDb9SGp8F2iNASKZBOwsUbK7JWL3s";

  const [thumbnails, setThumbnails] = useState({});
  const [date, setDate] = useState("");
  const [earning, setEarning] = useState("");

  async function fetchData() {
    try {
      // let res=await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}` )
      // https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWX0cUR2rZcqKei1Vstww-A&key=AIzaSyDT6zgDb9SGp8F2iNASKZBOwsUbK7JWL3s

      // console.log(res.data.items);

      // setResult(res.data.items);
      // console.log(youtubeData.items[0].snippet.thumbnails.default.url);
      setThumbnails(youtubeData?.items[0]);
      // setResult(youtubeData.items.statistics);
      //date
      const originalDate = youtubeData?.items[0].snippet.publishedAt;
      const dateObject = new Date(originalDate);

      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = dateObject.toLocaleDateString("en-US", options);

      setDate(formattedDate);

      // ESTIMATE earning
      // Earnings = min(subscriber count, views) + 10 * comments + 5 * likes
      {
        let subCount = parseInt(youtubeSub.items[0].statistics.subscriberCount);
        let viewCount = parseInt(youtubeData?.items[0].statistics?.viewCount);

        let commentCount = parseInt(
          youtubeData.items[0].statistics?.commentCount
        );
        let likeCount = parseInt(youtubeData.items[0].statistics?.likeCount);

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

  // console.log(result);



  return (
    <div>
      <header className="mb-8 d-flex justify-content-around ">
        <NavLink to={"/"} className="d-flex ">
          <img src={brandlogo} alt="brand-icon" className="brand-icon" />
          <h1 className="brand-text text-light ">
            anchors <sup className="suffix">Beta</sup>
          </h1>
        </NavLink>
        <RequestCallBack/>
      </header>

      <div className="container ">
        <div className="row">
          {/* Left-side card with two parts */}
          <div className="col-md-6">
            <div className="card">
              <div className="row">
                {/* First part */}
                <div className="col-md-6">
                  <div className="card-body d-flex row">
                    <div>
                      <span className="badge"></span>
                      <span> top earner video</span>
                    </div>
                    <img
                      src={thumbnails?.snippet?.thumbnails?.default?.url}
                      className="card-img-top"
                      alt="Image"
                    />
                    <p className="card-text">Uploaded on - {date}</p>
                  </div>
                </div>
                {/* Second part */}
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title h6">
                      {thumbnails?.snippet?.title}
                    </h5>
                    <p className="card-text">
                      {thumbnails?.statistics?.viewCount}
                    </p>

                    <p className="card-text">
                      {thumbnails?.statistics?.likeCount}
                    </p>
                    <p className="card-text">
                      {thumbnails?.statistics?.commentCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right-side card */}
          <div className="col-md-6 right-container">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">₹ {earning}</h2>
                <button className="btn btn-light">check how?</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //table */}
      <div className="container mt-5">
        <table className="table custom-table table-bordered">
          <thead>
            <tr>
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
          <tbody>
            {/* Add your table rows here */}
            <tr>
              <td>1</td>
              <td>{thumbnails?.snippet?.title}</td>
              <td>
                <img
                  src={thumbnails?.snippet?.thumbnails?.default?.url}
                  alt="Thumbnail 1"
                  style={{ width: 80, height: 60 }}
                />
              </td>
              <td>{thumbnails?.statistics?.viewCount}</td>
              <td>{thumbnails?.statistics?.likeCount}</td>
              <td>{thumbnails?.statistics?.commentCount}</td>
              <td>{date}</td>
              <td>{earning}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{thumbnails?.snippet?.title}</td>
              <td>
                <img
                  src={thumbnails?.snippet?.thumbnails?.default?.url}
                  alt="Thumbnail 2"
                  style={{ width: 80, height: 60 }}
                />
              </td>
              <td>{thumbnails?.statistics?.viewCount}</td>
              <td>{thumbnails?.statistics?.likeCount}</td>
              <td>{thumbnails?.statistics?.commentCount}</td>
              <td>{date}</td>
              <td>{earning}</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>


    </div>



  );
}

export default ResultsPage;

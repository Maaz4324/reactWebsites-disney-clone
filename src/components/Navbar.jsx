import React from "react";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center text-white bg-midnight px-10 py-4">
      <div className="flex justify-center items-center">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="style-scope yt-icon mr-4 cursor-pointer"
          style={{
            pointerEvents: "none",
            display: "block",
            width: 30,
            height: 30,
            fill: "white",
          }}
        >
          <g className="style-scope yt-icon">
            <path
              d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <img
          src={logo}
          className="text-white w-20 mr-4 cursor-pointer"
          alt="not showing"
        />
        <div className="nav flex">
          <ul className="flex justify-between items-center">
            <li className="mr-4">
              <a href="" className="text-white no-underline">
                TV
              </a>
            </li>
            <li className="mr-4">
              <a href="" className="text-white no-underline">
                Movies
              </a>
            </li>
            <li className="mr-4">
              <a href="" className="text-white no-underline">
                Sports
              </a>
            </li>
            <li className="mr-1">
              <a href="" className="text-white no-underline">
                Disney+
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="input flex items-center justify-start border-white-700 border-b mr-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="style-scope yt-icon"
            style={{
              pointerEvents: "none",
              display: "block",
              width: 20,
              height: 20,
              fill: "gray",
            }}
          >
            <g className="style-scope yt-icon">
              <path
                d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                className="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </div>
        <div className="subscribe text-sm">
          <button className="mr-4 bg-blue-500 py px-2 rounded-sm font-bold">
            SUBSCRIBE
          </button>
          <button className="mr-4 bg-transparent py px-2">LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

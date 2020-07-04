import React, { Component } from "react";
import "./App.css";

const api = {
  key: "98c126cc64d4cb2bd745ddd7ef1beec5",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

export default function App() {
    const dateBuilder=(d)=>{
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        let day=days[d.getDay()];
        let date=d.getDate();
        let month= months[d.getMonth()];
        let year=d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }

  return (
    <div className="container ">
      <main>
        <div className="searchBox">
          <input type="text" className="searchBar" placeholder="Search.." />
        </div>
        <div className="location-box">
          <div className="location"> Varanasi, UttarPradesh</div><br/>
            <div className="date">
            {dateBuilder(new Date())}
          </div>
        </div>
        <div className="weather-box">
            <div className="temp"> 15<sup>o</sup>C</div>
            <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

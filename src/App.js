import React, { useState } from "react";
import "./App.css";

const api = {
    key: "98c126cc64d4cb2bd745ddd7ef1beec5",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
};

export default function App() {
    const [place, setPlace] = useState('');
    const [weather, setWeather] = useState({});

    const search = event => {
        console.log(event.key)
        if (event.key === "Enter") {
            fetch(`${api.baseUrl}weather?q=${place}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    setWeather(result)
                    setPlace("")
                })

        }
    }




    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }

    return (
        <div
        className={(typeof weather.main === "undefined") ?'container':`container ${weather.weather[0].main}`}>

            
            <main>
                <div className="searchBox">
                    <input
                        type="text"
                        className="searchBar"
                        placeholder="Search.."
                        onChange={(e) => { setPlace(e.target.value) }}
                        value={place}
                        onKeyPress={(event) => search(event)} />
                </div>
                {(typeof weather.main !== "undefined")
                    ?
                    <div>
                        <div className="location-box">
                    <div className="location"> {weather.name},{weather.sys.country}</div><br />
                            <div className="date">
                                {dateBuilder(new Date())}
                            </div>
                        </div>
                        <div className="weather-box">
                            <div className="temp"> {Math.round(weather.main.temp)}<sup>o</sup>C</div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                    : ('')
                }

            </main>
        </div>
    );
}

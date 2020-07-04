import React, { Component } from 'react'
import './App.css'

const api={
    key:"98c126cc64d4cb2bd745ddd7ef1beec5",
    baseUrl:"https://api.openweathermap.org/data/2.5/"
}

export default function App() {
  
 return (
            <div className="container cold">
              <main>
                  <div className="searchBox">
                      <input
                        type="text"
                        className="searchBar"
                        placeholder="Search.."
                      />

                  </div>
              </main>
            </div>
        )
    
}

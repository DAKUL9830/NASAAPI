import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../nasa-logo-web-rgb.png';

function Home() {
    return (
        <div>
            <h1>WELCOME TO THE NASA API</h1>
            <br/>
            <br/>
          <Link to='/nasaapi'>Open the Universe</Link> 
            <br/>
            <br/>
            <img src={logo}  className="App-logo" alt="logo" />

        </div>
    )
}

export default Home

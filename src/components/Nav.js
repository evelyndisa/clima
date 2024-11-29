import React, { useState } from "react"
import '../assets/css/Nav.css'

export default function Nav ({newLocation}){
    const [city, setCity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({city})
        if(city === '' || !city) return 

        newLocation(city)
    }
    return(
        <nav className="nav">
            <h1>Weather</h1>
            <form onSubmit={onSubmit} className="form-search-weather">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)} />
                    <button className=" button-magnifier" type="submit"><img src="./images/magnifier.png"  alt="search icon"/></button>
            </form>
        </nav>
    )
}
import React, { useState } from "react"
import '../assets/css/Nav.css'

export default function Nav ({newLocation}){
    const [city, setCity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({city})
        if(city === '' || !city) return newLocation(city)
    }

    return(
        <nav className="nav">
            <h1 className="">Weather</h1>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)} />
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </nav>
    )
}
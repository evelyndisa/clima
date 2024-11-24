import React, { useState } from "react"

export default function Form (){
    const [city, setCity] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({city})
        if(city === '' || !city) return 
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)} />
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    )
}
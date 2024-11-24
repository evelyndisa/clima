import React from "react";
import Spinner from "./Spinner";
                                    //se visualiza o no los datos
export default function Card({loadingData, showData, weather, forecast}){

    if(loadingData){
        return  <Spinner />;
    }


    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                        
                                    <img src="/images/card.png" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">No se encuentran resultados, corraborar que sea una ciudad existente.</h2>
                )
            }
        </div>
    )
}
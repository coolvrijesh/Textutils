import React from 'react'
//import uniPeLogo from "./img/logo.png"

export default function Card(props) {
    const {darkStyle, Card1,Card2, Card3} = props
    return (
        <>
            <div className='container'>
                <div className='row'>
                <div className='col-md-4'>
                    <div className="card" style={{darkStyle}}>
                        {/* <img src={uniPeLogo} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{Card1}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a> 
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{Card2}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            <p>{darkStyle.color}</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{Card3}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>                 
            </div>
            </div>
        </>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import './hotel.css'
const Hotels = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-3">

                        {/* left site search sidebar */}
                        <div className="bg-darkBlue py-4 px-2">
                            <h4 className='text-white fw-regular'>Search Filters</h4>

                            <form>

                                <div className="my-2">
                                    <label htmlFor="inputEmail4" className="form-label text-white fw-regular">Destination</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder='Which City' />
                                </div>

                                <div className="my-2">
                                    <label htmlFor="inputEmail4" className="form-label text-white fw-regular">Check-In-Dates</label>
                                    <input type="date" className="form-control" id="inputEmail4" />
                                </div>
                                <h5 className='my-3 text-white fw-regular'>Options</h5>

                                <div className="row mb-3">
                                    <div className="col-sm-12 col-md-8">
                                        <label htmlFor="inputEmail3" className="col-form-label text-white fw-regular">Min-Price/Night</label>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-12 col-md-8">
                                        <label htmlFor="inputEmail3" className="col-form-label text-white fw-regular">Max-Price/Night</label>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-12 col-md-8">
                                        <label htmlFor="adult" className="col-form-label text-white fw-regular">Adult</label>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <input type="number" min={1} max={100} className="form-control" id="adult" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-12 col-md-8">
                                        <label htmlFor="children" className="col-form-label text-white fw-regular">Children</label>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <input type="number" min={0} max={100} className="form-control" id="children" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-sm-12 col-md-8">
                                        <label room="inputEmail3" className="col-form-label text-white fw-regular">Room</label>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <input type="number" min={1} max={100} className="form-control" id="room" />
                                    </div>
                                </div>
                                <button type='submit' className='btn btn-primary'>Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-9">
                        <div className="hotelItemWrapper">
                            <div className="hotelItem">
                                <div className="card mb-3 shadow-sm">
                                    <div className="row g-0">

                                        <div className="col-md-4">
                                            <img src="https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804479__340.jpg" className="img-fluid rounded-start w-100 h-100" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <NavLink to='/'> <h5 className="card-title me-3 w-100">Card title</h5></NavLink>
                                                    </div>
                                                    <div className="col-6 text-end">
                                                        <h6>Excelent <span className="badge bg-primary ms-3">9.8</span></h6>
                                                    </div>
                                                </div>
                                                <p><em>500 from Distance</em></p>
                                                <p className="badge rounded-pill bg-success">Free Airport Taxi</p>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <div className="detailsBox overflow-hidden" >
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                                        </div>
                                                    </div>
                                                    <div className="col-4 text-end">
                                                        <div className="detailsBox" >
                                                            <h2>$120</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className="fw-bold text-success">Free Cancelation</p>
                                                    <p className='text-muted'>Includes texes & fees</p>
                                                </div>
                                                <button type='button' className='d-block btn btn-primary text-uppercase'>See Avaibality</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hotels
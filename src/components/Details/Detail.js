import React from 'react'
import './details.css'

const Detail = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="detailsWrapper">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img src="https://source.unsplash.com/ufFIweqSPd4/800x800" id="main" className='mainImg w-100' />
                            <div className="detailThumbnails d-flex">
                                <img src="https://source.unsplash.com/ufFIweqSPd4/800x800" />
                                <img src="https://source.unsplash.com/O0uCm1WLnA0/800x800" />
                                <img src="https://source.unsplash.com/pV5ckb2HEVk/800x800" />
                                <img src="https://source.unsplash.com/j9QEFAQqaXc/800x800" />
                                <img src="https://source.unsplash.com/EXkbaeN05lY/800x800" />
                                <img src="https://source.unsplash.com/B2mq60Ksrsg/800x800" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti magnam culpa neque ea</h2>
                            <p className='badge bg-primary'>city name</p>

                            <div className="details">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quaerat maxime doloremque praesentium aliquid accusantium voluptates, explicabo eum eveniet optio quos ut ducimus provident illum amet corrupti magnam harum asperiores! voluptates, explicabo eum eveniet optio quos ut ducimus provident illum amet corrupti magnam harum asperiores! voluptates, explicabo eum eveniet optio quos ut ducimus provident illum amet corrupti magnam harum asperiores! voluptates, explicabo eum eveniet optio quos ut ducimus provident illum amet corrupti magnam harum asperiores!</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <b>Something Special</b>
                                <b>Something Special</b>
                            </div>

                            <div className="d-flex justify-content-between">
                                <b>Prize</b>
                                <h5>120$</h5>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type='button' className='btn btn-lg btn-primary w-100 mt-5'>BOOK NOW</button>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="reviews">
                    <p class="fs-3 fw-bold my-4">All Reviews</p>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <span class="badge bg-primary rounded-pill">14</span>
                        </li>

                    </ol>
                </div>
            </div>
        </>
    )
}

export default Detail
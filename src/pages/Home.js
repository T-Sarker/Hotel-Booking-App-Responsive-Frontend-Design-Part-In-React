import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { FaStreetView, FaBaby, FaHome, FaCalendarAlt } from "react-icons/fa";


const Home = () => {

  // state for showing and hiding option buttons
  const [dateBtn, setDateBtn] = useState(false)
  const [optionBtn, setOptionBtn] = useState(false)

  //react-date-range needs this state management
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  // managing option buttons value
  const [optionValue, setOptionValue] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  //option hiding or showing
  const DateBtnToggle = () => {
    if (dateBtn === true) {
      setDateBtn(false)
    } else {
      setDateBtn(true)
    }
  }

  //option hiding or showing
  const optionBtnToggle = () => {
    if (optionBtn === true) {
      setOptionBtn(false)
    } else {
      setOptionBtn(true)
    }
  }

  //assigning option value
  const handleValue = (name, type) => {
    setOptionValue((prev) => { // to get the previous valu i have to put it inside fat arrow function
      return {
        ...prev, [name]: type === 'dec' ? optionValue[name] - 1 : optionValue[name] + 1
      }
    })
  }

  return (
    <>
      <div className="heroBanner">
        <div className="container py-5">
          <h2 className='pt-2'>A lifetime of discounts? It's Genius.</h2>
          <p className="casualtext pt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugit blanditiis
          </p>
          <button className='btn btn-lg btn-dark text-white'>More Details</button>
        </div>
      </div>

      {/* searchbar */}
      <div className="searchbar">
        <div className="searchbox">
          <div className="row">

            <div className="col-sm-12 col-md-4 p-0">
              <div className="searchboxItem">
                <input type="text" className="form-control py-3 boder-dark rounded-pill" placeholder='Where are You Going' />
              </div>
            </div>

            <div className="col-sm-12 col-md-4 p-0">
              <div className="searchboxItem">
                <div className='form-control py-3 rounded-pill' onClick={DateBtnToggle}><span className='text-muted'><FaCalendarAlt /> Date to Date</span></div>
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className={dateBtn ? 'd-block' : 'd-none'}
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-4 p-0">
              <div className="searchboxItem">
                <div className='form-control py-3 rounded-pill' onClick={optionBtnToggle}><small className='text-muted shadow-text overflow-hidden d-flex justify-content-between'><FaStreetView /> {optionValue.adult} Adult <FaBaby /> {optionValue.children} Baby <FaHome /> {optionValue.room} Rooms</small></div>
                <div className={optionBtn ? 'numBoxWraper d-block' : 'numBoxWraper d-none'}>
                  {/* single search number op people box item */}
                  <div className="optionItem">
                    <p className='optionTitle text-dark mx-4'>Adult</p>
                    <div className="d-flex">
                      <button className='btn btn-outline-dark mx-1' disabled={optionValue.adult <= 1 ? true : false}
                        onClick={() => { handleValue('adult', 'dec') }}
                      >-</button>
                      <span className='btn btn-outline-warning'>{optionValue.adult}</span>
                      <button className='btn btn-outline-dark mx-1' onClick={() => { handleValue('adult', 'inc') }}>+</button>
                    </div>
                  </div>

                  {/* single search number op people box item */}
                  <div className="optionItem">
                    <p className='optionTitle text-dark mx-4'>Children</p>
                    <div className="d-flex">
                      <button className='btn btn-outline-dark mx-1' disabled={optionValue.children <= 0 ? true : false}
                        onClick={() => { handleValue('children', 'dec') }}
                      >-</button>
                      <span className='btn btn-outline-warning'>{optionValue.children}</span>
                      <button className='btn btn-outline-dark mx-1' onClick={() => { handleValue('children', 'inc') }}>+</button>
                    </div>
                  </div>

                  {/* single search number op people box item */}
                  <div className="optionItem">
                    <p className='optionTitle text-dark mx-4'>Room</p>
                    <div className="d-flex">
                      <button className='btn btn-outline-dark mx-1' disabled={optionValue.room <= 1 ? true : false}
                        onClick={() => { handleValue('room', 'dec') }}
                      >-</button>
                      <span className='btn btn-outline-warning'>{optionValue.room}</span>
                      <button className='btn btn-outline-dark mx-1' onClick={() => { handleValue('room', 'inc') }}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* city wise cout property */}
      <div className="cityWiseCount my-5 container">
        <div className="row">

          <div className="col-sm-12 col-md-4 shadow-sm my-3">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='ggg' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <div className="countDetails">
                <h4 className='my-2 bg-white text-dark fw-400 text-uppercase'>City Name</h4>
                <h5 className='my-2'>1234 properties</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 shadow-sm my-3">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='ggg' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <div className="countDetails">
                <h4 className='my-2 bg-white text-dark fw-400 text-uppercase'>City Name</h4>
                <h5 className='my-2'>1234 properties</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 shadow-sm my-3">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='ggg' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <div className="countDetails">
                <h4 className='my-2 bg-white text-dark fw-400 text-uppercase'>City Name</h4>
                <h5 className='my-2'>1234 properties</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* browse rooms by property type */}
      <div className="cityWiseCount my-5 container">
        <h4 className='text-bold mt-5 mb-3 text-capitalize'>Browse by property type</h4>
        <div className="row">

          <div className="col-sm-12 col-md-3 shadow-sm my-4">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='fff' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h4 className='my-2'>City Name</h4>
              <h5 className='my-2'>1234 properties</h5>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 shadow-sm my-4">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='gg' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h4 className='my-2'>City Name</h4>
              <h5 className='my-2'>1234 properties</h5>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 shadow-sm my-4">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='gg' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h4 className='my-2'>City Name</h4>
              <h5 className='my-2'>1234 properties</h5>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 shadow-sm my-4">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='jjj' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h4 className='my-2'>City Name</h4>
              <h5 className='my-2'>1234 properties</h5>
            </div>
          </div>

        </div>
      </div>


      {/* browse rooms by popularity type */}
      <div className="cityWiseCount my-5 container">
        <h4 className='text-bold mt-5 mb-3 text-capitalize'>Browse by People's Choice</h4>
        <div className="row">

          <div className="col-sm-12 col-md-3 my-3 shadow-sm">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='fff' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h5 className='my-2'>City Name</h5>
              <div className="d-flex justify-content-between">
                <p>City Name</p>
                <p className='mx-4 text-bold'>Starting From 100$</p>
              </div>
              <p><span className="badge bg-dark">5/5</span> Excellent</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 my-3 shadow-sm">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='fff' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h5 className='my-2'>City Name</h5>
              <div className="d-flex justify-content-between">
                <p>City Name</p>
                <p className='mx-4 text-bold'>Starting From 100$</p>
              </div>
              <p><span className="badge bg-dark">5/5</span> Excellent</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 my-3 shadow-sm">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='fff' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h5 className='my-2'>City Name</h5>
              <div className="d-flex justify-content-between">
                <p>City Name</p>
                <p className='mx-4 text-bold'>Starting From 100$</p>
              </div>
              <p><span className="badge bg-dark">5/5</span> Excellent</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-3 my-3 shadow-sm">
            <div className="cityItem position-relative">
              <img className='rounded  w-100' alt='fff' src="https://wallup.net/wp-content/uploads/2017/11/22/366189-city-street-Manhattan-New_York_City-748x509.jpg" />
              <h5 className='my-2'>City Name</h5>
              <div className="d-flex justify-content-between">
                <p>City Name</p>
                <p className='mx-4 text-bold'>Starting From 100$</p>
              </div>
              <p><span className="badge bg-dark">5/5</span> Excellent</p>
            </div>
          </div>

        </div>
      </div>

      {/* subscribe newsletter */}

      <div className="newsletterArea p-5">
        <div className="container ">
          <div className="w-30 text-center">
            <h3 className='text-white'>Don't Waste Time! Subscribe Our Newsletter</h3>
            <form className='w-75 mx-auto py-3'>
              <div className="input-group pb-3 ">
                <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-dark" type="button" id="button-addon2">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Home
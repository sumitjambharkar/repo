import React, { useState, useEffect } from 'react'
import './Offer.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Offer = () => {

  const [offer, setoffer] = useState([])

  const [name, setname] = useState('')
  const [city, setcity] = useState('')
  const [num, setnum] = useState('')
  const [team, setteam] = useState('')


  const book = () => {
    toast("2 दिन प्रतीक्षा करें ");
    setname('')
    setcity('')
    setnum('')
    setteam('')
  }




  return (
      
        <>
          <div class="offer text-center">
            <div class="card-header">
              <h3>title</h3>
            </div>
            <div class="card-body">
              <h6 class="card-title">title2</h6>
              <p class="card-text">title3</p>
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
            <div class="card-footer text-muted">
              title4
            </div>


            <div className='ipl'>
              <div class="typewriter">
                <h1>Free IPL Tickets</h1>
              </div>
              <div className='formdi'>
                <div class=" formmm row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label" style={{ color: 'white' }}>Name</label>
                    <input type="text" class="form-control" onChange={(e)=>setname(e.target.value)} />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label" style={{ color: 'white' }}>Phone No</label>
                    <input type="text" class="form-control" onChange={(e)=>setnum(e.target.value)} />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label" style={{ color: 'white' }} >city</label>
                    <input type="text" class="form-control" onChange={(e)=>setcity(e.target.value)} />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress2" class="form-label" style={{ color: 'white' }}>Team Name</label>
                    <input type="text" class="form-control" onChange={(e)=>setteam(e.target.value)} />
                  </div>
                  <p></p>
                  <div class="col-12">
                    <button onClick={book}>Ticket Book </button>
                    <ToastContainer />
                  </div>

                </div>
              </div>

            </div>
          </div >



        </>
    
  )
}

export default Offer

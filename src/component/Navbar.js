import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser,logout } from '../features/userSlice';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  
  const dispatch = useDispatch();

  const user = useSelector(selectUser)

  const signOut = () => {
    dispatch(logout())
  }
  return (

    <>
  
  <div className='nav container-flued sticky-top'>
    <div className='container'>
      <div className=" navbar sticky-top" >
        <div className="col-6">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <Link to='/'><img className='logoimages' src='https://res.cloudinary.com/dgvvfn1gf/image/upload/v1675317788/CLEANNATIONLOGO_2_f6hz9d.png' alt="logo" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sudiv col-6">

          <div className="btn warning tog navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <div>
                <MenuIcon fontSize='large'  className='burgrr'/>
            </div>
          </div>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link className='linku' to='/'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  HOME
                </li>
                </Link>
                <Link className='linku' to='/Category'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SERVICE
                </li>
                </Link>
                <Link className='linku' to='/about'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  ABOUT US
                </li>
                </Link>
                <Link className='linku' to='/offer'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  OFFER
                </li>
                </Link>
                <Link className='linku' to='/pages'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  Pages
                </li>
                </Link>
                <Link className='linku' to='/contactus'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  CONTACT US
                </li>
                </Link>
                {!user?
                <>
                <Link className='linku' to='/pay'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                SELL SERVISES
              </li>
              </Link>
              <Link className='linku' to='/login'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                LOGIN
              </li>
              </Link>
                </>:
              <>
                <Link className='linku' to='/dashboard'> <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  DASHBOARD
                </li>
                </Link>
                  
                 <Link onClick={signOut} className='linku' to='/' > <li data-bs-dismiss="offcanvas" className=" linkss nav-item">
                  SINGOUT
                </li>
                </Link>
                </> }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
   

  )
}

export default Navbar

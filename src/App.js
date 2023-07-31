

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './component/Footer';
import Form from './component/Form';
import Home from './component/Home'
import Login from './component/Login';
import Navbar from './component/Navbar';
import ShowData from './component/ShowData';
import AddServices from './dashboard/AddServices';
import Dashboard from './dashboard/Dashboard';
import Edit from './dashboard/Edit';

import TotaleServises from './dashboard/TotaleServises';
import Cancellation from './FooterCompo.js/Cancellation';
import FAQs from './FooterCompo.js/FAQs';

import Privecy from './FooterCompo.js/Privecy';
import Terms from './FooterCompo.js/Terms';
import About from './Menus/About';
import Contactus from './Menus/Contactus';
import Offer from './Menus/Offer';
import Team from './Menus/Team'
import { HelmetProvider } from 'react-helmet-async';
import Payment from './component/Payment';
import Paymentss from './FooterCompo.js/Paymentss';
import PrivateRoute from './PrivateRoute';
import Services from './component/Services';

const App = () => {
  const helmetContext = {};

  return (
    <div className='app'>
      <BrowserRouter>
        <HelmetProvider context={helmetContext}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Services />} />
            <Route path="/pages" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/login" element={<Login />} />


            <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-service" element={<AddServices />} />
            <Route path="/user-servies/:id" element={<TotaleServises />} />
            <Route path="/form" element={<Form />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/:id" element={<ShowData />} />
            </Route>
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/paymentss" element={<Paymentss />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privecy" element={<Privecy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/pay" element={<Payment />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App

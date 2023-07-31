import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../features/serviceSlice'
import Form from '../component/Form'
const Home = () => {
  const dispatch = useDispatch()
  const [search, setsearch] = useState("");
  const datas = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(getAllData())
  }, [])

  const data = [
    { id: 'Home Cleaning', img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-real-estate-moving-and-storage-flaticons-lineal-color-flat-icons.png', title: 'Home Cleaning', },
    { id: 'Car Cleaning', img: 'https://img.icons8.com/fluency/512/car-cleaning.png', title: 'Car Cleaning' },
    { id: 'chandelier-cleaning-services', img: 'https://img.icons8.com/external-nawicon-outline-color-nawicon/512/external-chandelier-living-room-nawicon-outline-color-nawicon.png', title: 'Chandelier Clean' },
    { id: 'best-shifting-services', img: 'https://img.icons8.com/external-vectorslab-flat-vectorslab/512/external-Moving-Home-real-estate-vectorslab-flat-vectorslab.png', title: 'Shifting' },
    { id: 'job-contract-services', img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/512/external-job-recruitment-agency-flaticons-flat-flat-icons.png', title: 'Job Agency' },
    { id: 'real-estate-agent-services', img: 'https://img.icons8.com/fluency/512/real-estate.png', title: 'Real Estate' },
    { id: 'decoration-events-services', img: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/512/external-decoration-usa-flatart-icons-flat-flatarticons-2.png', title: 'Decoration' },
    {
      id: 'digital-support-services', img: 'https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/512/external-digital-marketing-digital-marketing-flatart-icons-lineal-color-flatarticons.png'
      , title: 'Digital Support'
    },
    { id: 'all-types-services', img: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/512/external-more-interface-kiranshastry-gradient-kiranshastry.png', title: 'Others' }
  ]
  
  return (
    <>
      <div className="section">
        {data.map((e) => (
          <>
            <div>
              <Link to={`/${e.id}`} className='lim'> <div className='round_box'><img className='img' src={e.img} alt="images" /></div></Link><p className='p_text'>{e.title}</p>
            </div>
          </>
        ))}
      </div>
      <Form/>
    </>
  );
};

export default Home;

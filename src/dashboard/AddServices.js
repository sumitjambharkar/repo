
import React, { useState } from 'react'
import KeyEnter from '../component/KeyEnter'
import './AddServices.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from "../features/venderSlice";
import Swal from 'sweetalert2'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const AddServices = () => {
    const user = useSelector(selectUser)
    
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [mobile, setMobile] = useState('')
    const [description, setDescription] = useState('')
    const [image,setImage] = useState('')

    const addServices = async() => {
       try {
        const data = new FormData();
        data.append("userId", user._id);
        data.append("category", category);
        data.append("name", name);
        data.append("price", price);
        data.append("description", description);
        data.append("image", image);
        data.append("mobile", mobile);
        const result = await axios.post(
          "/add-service",
          data
        );
        dispatch(addProduct(result.data));
        Swal.fire(
          'Done!',
          'You Service Add Successfully!',
          'success'
        )
        setCategory("")
        setName("")
        setPrice("")
        setDescription("")
        setImage("")
        setMobile("")
      } catch (error) {
        console.log(error);
      }
    }

    KeyEnter(addServices, "Enter");

    return (
        <>
            <div className='container addti'>
                <div className='row '>
                    <h2 className='addti'>Add Services</h2>
                    <div className="forms">

                        <div className="formss">
                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />
                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />
                            <div className="form-row">
                                <div className="input-group">
                                    <input type='file' className="input--style-5" placeholder="Image Url" onChange={(e) => setImage(e.target.files[0])} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />

                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />

                            <div className="form-row">
                                <div className="input-group">
                                    <input className="input--style-5" placeholder="Mobile No" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <div className='labe'>
                                    </div>
                                </div>
                            </div><br />

                           
                            <div className="form-row">
                                <div className="input--style-5 rs-select2 js-select-simple select--no-search">
                                    <select className='selecter' value={category} onChange={(e) => setCategory(e.target.value)} >
                                        <option selected>Choose Category</option>
                                        <option className='optionse' >Car Cleaning</option>
                                        <option className='optionse' >Home Cleaning</option>
                                        <option className='optionse' >Chandelier Cleaning</option>
                                        <option className='optionse' >Events</option>
                                        <option className='optionse' >Digital Support</option>
                                        <option className='optionse' >Decoration</option>
                                        <option className='optionse' >House Keeping</option>
                                        <option className='optionse' >Designer</option>
                                        <option className='optionse' >Programming</option>
                                        <option className='optionse' >Wedding Decoration</option>
                                        <option className='optionse' >Real Estate</option>
                                        <option className='optionse' >Contract Agency</option>
                                        <option className='optionse' >Fitness Traner</option>
                                        <option className='optionse' >Dance Music</option>
                                        <option className='optionse' >Sport Traner</option>
                                        <option className='optionse' >Caterers</option>
                                        <option className='optionse' >Shifting</option>
                                        <option className='optionse' >Others</option>
                                    </select>
                                    <div className="select-dropdown"></div>
                                </div>
                            </div><br />
                            <button onClick={addServices}>add</button>


                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddServices

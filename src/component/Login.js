import React, { useState,useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";
import KeyEnter from "./KeyEnter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {login ,signUp} from '../features/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, []);

  const loginss = async() => {
      try {
        const response = await axios.post('/login',{email,password})
        if (response.status===200) {
          dispatch(login(response.data.user))
          navigate('/')
        }else{
          alert(`${response.data.message}`)
        }
      } catch (error) {
        console.log(error);
      }
  };

  KeyEnter(loginss, "Enter");

  const singin = async () => {
    try {
      const response = await axios.post('/register',{email, password,name,mobile})
      if (response.status===200) {
        dispatch(signUp(response.data.user))
        navigate('/')
      }else{
        alert(`${response.data.message}`)
      }
    } catch (error) {
      console.log(error);
    }
  };

  // KeyEnter(singin, "Enter");

  return (
    <>
      <Tabs>
        <TabList className="tabss">
          <Tab>SIGN UP</Tab>
          <Tab>SIGN IN</Tab>
        </TabList>

        <TabPanel>
          <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <div className="singintitle">
                          <p class="text-center h2">SIGN UP</p>
                        </div>

                        <form class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="number"
                                id="form3Example3c"
                                class="form-control"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Mobile No
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              class="btns btn-primary btn-lg"
                              onClick={singin}
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://res.cloudinary.com/dgvvfn1gf/image/upload/v1674610877/New_Project_1_ucwq3z.png"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div class="login">
            <form class="login-container">
              <h2 class="login-header">SIGN IN</h2>
              <p>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <div className="logindiv">
                <Link className="loginbtn" onClick={loginss}>
                  SIGN IN
                </Link>
              </div>
            </form>
          </div>
        </TabPanel>
      </Tabs>
      <ToastContainer />
    </>
  );
};

export default Login;

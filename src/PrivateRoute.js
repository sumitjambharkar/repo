import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const PrivateRoute = () => {
    const user = useSelector(selectUser)
    
   return user? <Outlet/>:<Navigate to="/"/>
   
}

export default PrivateRoute;
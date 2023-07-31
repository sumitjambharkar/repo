import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TotaleServices.css";
import { deleteProduct, venderService } from "../features/venderSlice";
import { useDispatch, useSelector } from "react-redux";

const TotaleServises = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  const data = useSelector((state) => state.product);
  const [service,setServices] = useState([])
  console.log(data);

  useEffect(() => {
    dispatch(venderService(param.id));
    setServices(data?.product)
  }, [data]);

  const deleteService = (id) => {  
    setServices((prevChat) => {
      const updateServi = [...prevChat];
      const index = updateServi.findIndex((item) => item._id === id);
      if (index > -1) {
        updateServi.splice(index, 1);
      }
      return updateServi;
    });
    fetch(`/deleteService/${id}`, { method: "Delete" })
      .then((result) => {
        dispatch(deleteProduct(result))

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {service?.map((ele) => (
        <>
          <div className="totalerow row">
            <div className=" imge col-lg-6">
              <div>
                <img className="imasss" src={ele.image}></img>
              </div>
            </div>
            <div className="tess col-lg-6">
              <h5>{ele.name}</h5>
              <p>{ele.description}</p>
              <h5>{ele.price}</h5>
              <h5>{ele.mobile}</h5>
            </div>
            <div className="buton">
              <button>Edit</button>
              <button onClick={() => deleteService(ele._id)}>Delete</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default TotaleServises;

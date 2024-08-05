import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [userData, setUserData]= useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const inpuHandler = (e)=>{
        setUserData({...userData, [e.target.name] : e.target.value});
        console.log(userData)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("user....",userData)
        dispatch(createUser(userData))
        setUserData({});
        navigate('/redux-crud-app')

    }

  return (
    <>
      <div className="container w-100 h-100">
        <h4 className="text-center">Fill All Filled</h4>
        <form className="my-2 w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                onChange={inpuHandler}
              />
            </div>
            <div className="col-12 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your email"
                name="email"
                onChange={inpuHandler}
              />
            </div>
            <div className="col-12 my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Age"
                name="age"
                onChange={inpuHandler}
              />
            </div>
            <div className="col-12 my-2">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                onChange={inpuHandler}
              />
              <label className="form-check-label mx-2">
                Female
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                onChange={inpuHandler}
              />
              <label className="form-check-label mx-2">
                Male
              </label>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary w-20">
                Submit Form
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;

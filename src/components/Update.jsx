import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [updateData, setUpdatedata] = useState();

  const { users, loading } = useSelector((state) => {
    return state.app;
  });

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdatedata(singleUser[0]);
      console.log(singleUser[0]);
    } 
  }, [id]);

  const inpuHandler = (e)=>{
    setUpdatedata({...updateData, [e.target.name]: e.target.value})
    // console.log(updateData)
  }
  console.log(updateData)

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser(updateData));
    navigate('/redux-crud-app')
  };

  if (loading) {
    return <h4 className="text-center mt-5">Loading....</h4>;
  }
  return (
    <div className="container w-100 h-100">
      <h4 className="text-center">Edit This Filled</h4>
      <form className="my-2 w-50 mx-auto" onSubmit={handleUpdate}>
        <div className="row">
          <div className="col-12 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              value={updateData && updateData.name}
              onChange={inpuHandler}
            />
          </div>
          <div className="col-12 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your email"
              name="email"
              value={updateData && updateData.email}
              onChange={inpuHandler}
            />
          </div>
          <div className="col-12 my-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Age"
              name="age"
              value={updateData && updateData.age}
              onChange={inpuHandler}
            />
          </div>
          <div className="col-12 my-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={updateData && updateData.gender === "Female"}
              onChange={inpuHandler}
            />
            <label className="form-check-label mx-2">Female</label>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              checked={updateData && updateData.gender === "Male"}
              onChange={inpuHandler}
            />
            <label className="form-check-label mx-2">Male</label>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-20">
              Update Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;

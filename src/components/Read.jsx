import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUsers } from "../features/userSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const [radioData, setRadioData] = useState("");
  const [userId, setUserId] = useState()

  const { users, loading, searchUser } = useSelector((state) => {
    console.log("getUser....", state.app);
    return state.app;
  });

  useEffect(() => {
    dispatch(showUsers());
    // console.log("getUser....",users)
  }, []);
  // console.log("userId-", userId)
  
  // delete method
  const deleteHandler = (id)=>{
    // console.log("del id",id);
    dispatch(deleteUser(id))
  }

  if(loading){
   return <h4 className="text-center mt-5">Loading....</h4>
   }

  return (
    <>
     {userId && <CustomModal userId={userId} setUserId={setUserId}/>}
    <div className="container">
      <h4 className="text-center mt-2">All Users Details</h4>
      <div class="row">
        <div className="col-12 my-2">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value= ""
            onClick={(e)=>setRadioData(e.target.value)}
            checked={radioData === ""}
          />
          <label className="form-check-label mx-2" for="">
            All
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Female"
            onClick={(e)=>setRadioData(e.target.value)}
            checked={radioData === "Female"}
          />
          <label className="form-check-label mx-2" for="">
            Female
          </label>
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="Male"
            onClick={(e)=>setRadioData(e.target.value)}
            checked={radioData === "Male"}
          />
          <label className="form-check-label mx-2" for="">
            Male
          </label>
        </div>
        {users &&
          users.filter((ele)=>{
           if(searchUser){
           return ele.name.toLowerCase().includes(searchUser.toLowerCase())
           }else{
            return ele
           } 
          })
          .filter((ele)=>{
            if(radioData){
              return ele.gender === radioData
            }else{
              return ele
            }

            {/* if(radioData === "Female"){
              return ele.gender === radioData
            }else if(radioData === "Male"){
              return ele.gender === radioData
            }else{
              return ele
            } */}
          })
          .map((ele) => {
            return (
              <div key={ele.id} class="col-sm-12 col-md-6 col-lg-3 my-2">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Name: {ele.name}</h5>
                    <p class="card-text">Email Id: {ele.email}</p>
                    <p class="card-text">Age: {ele.age}</p>
                    <p class="card-text">Gender: {ele.gender}</p>
                    <button
                      className="mx-0 bg-info px-2 py-0 rounded-2 text-dark"
                      onClick={()=>setUserId(ele.id)}
                    >
                      View
                    </button>
                    <Link to={`edit/${ele.id}`}
                      className="mx-1 bg-warning px-2 py-1 rounded-2 text-dark border-black "
                    >
                      Edit
                    </Link>
                    <button
                      className="mx-0 px-2 py-0 rounded-2 bg-danger text-light"
                      onClick={()=>deleteHandler(ele.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};

export default Read;

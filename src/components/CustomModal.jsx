import React from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ userId,setUserId }) => {
  console.log(userId);

  const { users } = useSelector((state) => {
    return state.app;
  });

  const singleUser = users.filter((ele) => {
    return ele.id === userId;
  });
  const { name, email, age, gender, id} = singleUser[0];
  console.log("singleUser", singleUser[0]);

  return (
    <div className="modal-container">
      <div className="main-modal">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Name: {name}</h5>
            <p class="card-text">Id Number: {id}</p>
            <p class="card-text">Email Id: {email}</p>
            <p class="card-text">Age: {age}</p>
            <p class="card-text">Gender: {gender}</p>
            <button className="btn btn-primary mx-1" class="btn btn-danger" onClick={()=>setUserId("")}>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

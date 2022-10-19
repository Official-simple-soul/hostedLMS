import React from 'react'
import "./Modal.css";
import { Good } from "../../assets/index";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <img src={Good} alt='good' height={50} width = {50} className="mx-auto"/>
          <h2>Password reset successful</h2>
        </div>
        <div className="body">
          <p>You can now use your new password to log in to your account.</p>
        </div>
        <div className="footer">
          {/* <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button> */}
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
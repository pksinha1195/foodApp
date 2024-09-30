import React, { useEffect, useRef ,useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./LandingPage.css";
import { useDispatch, useSelector } from "react-redux";
import {createUser,emptyfunction} from "../store/userSlice"
import { createCart } from "../store/cartSlice";


const Signup = ({ onClose }) => {
  const {userInfo , loading }=useSelector((state)=>state.users)
  const dispatch=useDispatch();
  const initialState={
    name:"",
    email:"",
    address:"",
    password : "",
  }
  const [userData , setUserdata] = useState(initialState)
  const modelRef = useRef();
  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const handleChange=(e)=>{
    setUserdata({...userData, [e.target.name]:e.target.value})
  }
  const handleSubmit=()=>{
    console.log({userData});
    dispatch(createUser(userData));
  }

  useEffect(()=>{
    if (loading==="success"){
      // console.log(userInfo.data._id);
      dispatch(createCart({"user":userInfo.data._id}))
      alert(userInfo.message)
      onClose();
      setUserdata(initialState)
      dispatch(emptyfunction());
    }
    if (loading==="rejected"){
      alert(`something happens.. \n`+  userInfo)
      console.log(userInfo);
      onClose();
      setUserdata(initialState)
      dispatch(emptyfunction());
    }
  },[loading])
 
  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="modal show"
        style={{
          display: "block",
          position: "fixed",
          zIndex: "10",
          color: "black",
        }}
      >
        <Modal.Dialog>
          <Modal.Header
            onClick={onClose}
            closeButton
            style={{ border: "none" }}
          >
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form action="">
              <div className="m-3 mycolor">
                <FloatingLabel
                  controlId="userName"
                  label="User Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="name@example.com"
                    className="noblueborder"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>
              <div className="m-3 mycolor">
                <FloatingLabel
                  controlId="email"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="noblueborder"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>
              <div className="m-3 mycolor">
                <FloatingLabel
                  controlId="address"
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="name@example.com"
                    className="noblueborder"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>
              <div className="m-3">
                <FloatingLabel controlId="password" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </div>
              <div className="m-3">
                <input type="checkbox" className="me-3" id="terms" name="terms" onChange={handleChange} />
                <span style={{ fontSize: "12px" }}>
                  I agree to FoodApp's{" "}
                  <span style={{ color: "red" }}>
                    Terms of Service, Privacy Policy
                  </span>
                  and <span style={{ color: "red" }}>Content Policies</span>
                </span>
              </div>
              <div>
                <Button
                  type="submit"
                  className="m-3 py-2 btn btn-primary"
                  style={{ width: "90%" }}
                  onClick={handleSubmit}
                >
                  Create Account
                </Button>
              </div>
              <div className="mx-3 d-flex">
                <hr style={{ width: "45%" }} />{" "}
                <span style={{ padding: "3px" }}>or</span>{" "}
                <hr style={{ width: "45%" }} />
              </div>
            </form>
            <div>
              <button
                className="m-3 py-2 btn "
                style={{ width: "90%", border: "1px solid #adadad" }}
              >
                <img
                  src="./images/google.png"
                  className="me-2 mb-1"
                  alt=""
                  height="20px"
                  width="20px"
                />
                Sign in with Google
              </button>
            </div>
            <div className="mx-3">
              <hr style={{ width: "95%" }} />
            </div>
            <div className="fs-5">Already have an account? Log in</div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Signup;

import React, { useRef, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./LandingPage"
import { useDispatch, useSelector} from "react-redux"
import { getUser, emptyfunction } from "../store/userSlice";
import {getCart} from "../store/cartSlice"

const Signin = ({ onClose }) => {
  const dispatch=useDispatch();
  const {userInfo, loading, loginUser} = useSelector(state=>(state.users))

  const modelRef = useRef();
  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };
  const initialState={
    email:"",
    password : "",
  }
  const [userData , setUserData] = useState(initialState)

  const handleChange=(e)=>{
    setUserData({...userData, [e.target.name] : e.target.value})
  }


  const handleSubmit=(e)=>{
    // const username=document.getElementById("floatingInput").value
    // const password=document.getElementById("floatingPassword").value
    if ( userData.email === "" || userData.password==="" ){
      alert("userName or Password cant be blank")
      e.preventDefault();
    }else{
      // console.log(userData);
      dispatch(getUser(userData))
      // onClose()
    }
  }

  useEffect(()=>{
    if (loading==="success"){
      console.log(loginUser.data.name);
      dispatch(getCart({"user" : loginUser.data[0]._id}))
      alert("Welcome back  " + loginUser.data[0].name);
      onClose();
      setUserData(initialState)
      dispatch(emptyfunction());
    }
    if (loading==="rejected"){
      alert(`Email Or Password may be Incorrect \n`+  userInfo)
      // console.log(userInfo);
      // onClose();
      setUserData(initialState)
      dispatch(emptyfunction());
    }
  },[loading])

  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="modal show"
        style={{ display: "block", position: "fixed", zIndex: "10",color:"black"}}
      >
        <Modal.Dialog>
          <Modal.Header onClick={onClose} closeButton style={{border:'none'}}>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
            <div className="m-3 mycolor">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" value={userData.email} name="email" placeholder="name@example.com" className="noblueborder" onChange={handleChange} />
              </FloatingLabel>
            </div>
            <div className="m-3">
              <FloatingLabel controlId="current-Password" label="Password">
                <Form.Control type="password" value={userData.password} name="password" placeholder="Password" onChange={handleChange}/>
              </FloatingLabel>
            </div>

            <div>
              <button type="submit" onClick={handleSubmit}
                className="m-3 py-2 btn btn-primary"
                style={{ width: "90%", border:"none" }}
              >
                Sign In
              </button>
            </div>
            <div className="mx-3 d-flex">
              <hr style={{ width: "45%" }} />{" "}
              <span style={{ padding: "3px" }}><span>or</span></span>{" "}
              <hr style={{ width: "45%" }} />
            </div>
            <div>
              <button
                className="m-3 py-2 btn "
                style={{ width: "90%" ,border:"1px solid #adadad"}}
              ><img src="../../images/google.png" className="me-2 mb-1" alt="" height="20px" width="20px" />
                Sign in with Google
              </button>
            </div>
            <div className="mx-3">
              <hr style={{ width: "95%" }} />
            </div>
            <div className="fs-5">New to FoodApp? <span style={{color:"red"}}>Create Account</span> </div>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Signin;

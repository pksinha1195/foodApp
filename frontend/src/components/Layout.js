import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer";
import Signin from "./Signin";
import Signup from "./Signup";
import { useSelector, useDispatch } from "react-redux";
import "../index"
import { emptyUser } from "../store/userSlice";
import { ShoppingCart } from 'lucide-react';


function Layout() {
  const {loginUser}=useSelector(state=>state.users)
  const [showSignup,setShowSignup]=useState(false)
  const [showSignin,setShowSignin]=useState(false)
  const dispatch = useDispatch();
  // console.log(loginUser);


  const logoutUser = ()=>dispatch(emptyUser())
  return (
    <>
      <Navbar expand="lg" style={{ padding: "0px" }} className="">
        <Container>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            <b>FoodApp</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" style={{position:"absolute", right:"100px",top:"0px"}} >
            <Nav className="ms-auto fs-5 ">
              <Nav.Link className="px-4" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="px-4" href="/add-restaurant">
                Add Restaurant
              </Nav.Link>
              <Nav.Link className="px-4" href="/restaurantlist">
                Restaurant-List
              </Nav.Link>
              {/* <Nav.Link className="px-4" href="/restaurantdetails">
                Restaurant-Details
              </Nav.Link> */}
              <Nav.Link className="px-4">
              {loginUser.data ?
                <>
                <button className=""  style={{backgroundColor:"transparent",border:"none", color:"purple"}} ><ShoppingCart /></button>
                <button className="mx-2 px-4"  style={{backgroundColor:"transparent", color:"purple", border:"none"}} onClick={logoutUser} >Log Out</button>
                </>:
                <><button className="mx-2" href="/login" style={{backgroundColor:"transparent", color:"purple", border:"none"}} onClick={()=>setShowSignin(true)} >Log in</button>
                <button className="mx-2" style={{backgroundColor:"transparent", color:"purple", border:"none"}} onClick={()=>setShowSignup(true)} >Sign Up</button></> }
                {showSignup && <Signup onClose={()=>setShowSignup(false)} /> }
                {showSignin && <Signin onClose={()=>setShowSignin(false)} /> }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>      

      <Outlet></Outlet>
      <Footer />
    </>
  );
}

export default Layout;

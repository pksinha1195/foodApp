import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Signin from "./Signin";
import Signup from "./Signup";
import { useSelector, useDispatch } from "react-redux";
import "../index.js"
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
          <Navbar.Brand  style={{ color: "white" }}>
            <Link className=" mynav" to="/"><b>FoodApp</b></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" style={{position:"absolute", right:"100px",top:"0px"}} >
            <Nav className="ms-auto fs-5 ">
              <Link className="px-4  mynav" to="/">
                Home
              </Link>
              <Link className="px-4 mynav" to="/add-restaurant">
                Add Restaurant
              </Link>
              <Link className="px-4 mynav" to="/restaurantlist">
                Restaurant-List
              </Link>
              {/* <Nav.Link className="px-4" href="/restaurantdetails">
                Restaurant-Details
              </Nav.Link> */}
              <Link className="px-4 mynav">
              {loginUser.data ?
                <>
                <button className="mynav"   ><ShoppingCart /></button>
                <button className="mx-2 px-4 mynav" onClick={logoutUser} >Log Out</button>
                </>:
                <><button className="mx-2 mynav" onClick={()=>setShowSignin(true)} >Log in</button>
                <button className="mx-2 mynav"  onClick={()=>setShowSignup(true)} >Sign Up</button></> }
                {showSignup && <Signup onClose={()=>setShowSignup(false)} /> }
                {showSignin && <Signin onClose={()=>setShowSignin(false)} /> }
              </Link>
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

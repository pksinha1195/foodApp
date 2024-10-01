import React, { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { restaurantDetails } from "../store/restaurantSlice";


function DetailsPage() {
  const dispatch=useDispatch();
  const param=useParams();
  // console.log(param);
  const { details: restaurants, loading } = useSelector((state) => state.restaurants);
  const [myobj, setMyobj] = useState([]);
  // console.log(restaurants);
  const increment = (count) => {
    let data = parseInt(document.getElementById(count).innerText);
    document.getElementById(count).innerText = data + 1;
  };
  const decrement = (count) => {
    let data = parseInt(document.getElementById(count).innerText);
    if (data > 0) {
      document.getElementById(count).innerText = data - 1;
    }
  };
  
  useEffect(() => {
    if(loading==="idle" && restaurants.length===0){
      // console.log("restaurants.length= "+ restaurants.length);
      dispatch(restaurantDetails({name:param.name}));
    }
    // console.log("clicked");
    // console.log(restaurants);
    if (restaurants.length > 0) {
      const uniqueArray = Array.from(
        new Set(restaurants[0].items.map(({ type }) => type))
      );
      // .map((val) => (
      //     {val} (
      //     // restaurants[0].items.filter(({type}) => type===val)
      // )))
      const uniqueObject = uniqueArray.map((x) => {
        const data = restaurants[0].items.filter((obj) => obj.type === x);
        return { type: x, data: data };
      });
      setMyobj(uniqueObject);
    }
  }, [restaurants]);

  return (
    <>
      {restaurants.length > 0 ? (
        <div className="container-fluid">
          <div>
            <img
              src={restaurants[0].items[0].image}
              alt="restaurant"
              width="80%"
              height="400px"
            />
          </div>
          <div style={{ position: "sticky", top: "200px" }}>
            <b className="fs-4">{restaurants[0].name} </b>
            <p>{restaurants[0].cuisine.join(",")}</p>
            <p>{restaurants[0].location}</p>
            <div>
              <b>Menu Items</b>
              <br />
              <span>
                <hr style={{ border: "2px solid black" }} />
              </span>
            </div>
            <div>
              <Row className="justify-content-center">
                <div
                  className="col-lg-3"
                  style={{ borderRight: "1px solid gray" }}
                >
                  {myobj.map((val,index) => (
                    <p key={index} >
                      <a href= {`#${val.type}`} style={{textDecoration:"none",color:"inherit", fontSize:"16px"}}>
                        {val.type} ({val.data.length})
                      </a>
                    </p>
                  ))}
                </div>
                <div
                  className="col-lg-8 row"
                  style={{
                    height: "600px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    overflowY: "auto",
                  }}
                >
                  {myobj.map((obj) => (
                    <div key={obj.type}>
                      <div className="fs-5 fw-medium fs-5" id={obj.type}>{obj.type}</div>
                      {obj.data.map((item) => (
                        <Col key={item._id} md={4} lg={3} className="m-5">
                          <Card className="card-size">
                            <Card.Img
                              variant="top"
                              className="image-size"
                              src={
                                item.image ||
                                "https://wallpaperaccess.com/full/3014694.jpg"
                              }
                            />
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                              <p>
                                <i className="fa-solid fa-indian-rupee-sign font"></i>
                                <b className="fs-5">{" " + item.price}</b>
                              </p>
                              <button className="btn btn-success mx-2" >
                                Add to Cart
                              </button>
                              <button
                                className="btn fs-3"
                                onClick={() => increment(item.name)}
                              >
                                +
                              </button>
                              <span id={item.name} className="btn fs-5">
                                0
                              </span>
                              <button
                                className="btn fs-3"
                                onClick={() => decrement(item.name)}
                              >
                                -
                              </button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </div>
                  ))}
                </div>
              </Row>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default DetailsPage;

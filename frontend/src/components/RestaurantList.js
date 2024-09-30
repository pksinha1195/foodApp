import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { fetchRestaurants, restaurantDetails } from "../store/restaurantSlice";

const RestaurantList = () => {
  const { entities: restaurants, loading } = useSelector(
    (state) => state.restaurants
  );
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchRestaurants());
      console.log("object");
    }
  }, [loading, dispatch]);

  const detailsPage = (name) => {
    dispatch(restaurantDetails({ name: name }));
  };

  return (
    <>
    <div className="container-fluid">
      <Row>
        {restaurants.map((restaurant) => (
          <Col key={restaurant._id} md={4} lg={3} className="m-4">
            <Card className="card-size">
              <Card.Img
                variant="top"
                className="image-size"
                src={
                  restaurant.items[0]?.image ||
                  "https://wallpaperaccess.com/full/3014694.jpg"
                }
              />
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <p>
                  {restaurant.location}
                  <br />
                  {restaurant.cuisine.join(", ")}
                </p>
                <Link to={`/restaurantdetails/${restaurant.name}`}>
                  <button
                    className="btn btn-success"
                    onClick={() => detailsPage(restaurant.name)}
                  >
                    view
                  </button>
                </Link>

                {/* <button className="nos-btn ms-4" onClick={()=>increment()}>+</button>
              {count < 1 ?
              <span id style={{color:"red"}}>0</span>:
              <span style={{color:"green"}}>0</span>
              }
              <span id={restaurant.name}>0</span>
              <button className="nos-btn" onClick={decrement}>-</button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </>
  );
};

export default RestaurantList;

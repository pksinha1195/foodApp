import { useEffect, useState } from "react";
import { addRestaurant } from "../store/restaurantSlice";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddRestaurantPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cuisine: [],
    costForTwo: "",
    items: [],
  });

  const dispatch = useDispatch();
  const { addStatus } = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (addStatus === "succeeded") {
      setIsSubmitting(false);
    }
    if (addStatus === "loading") {
      setIsSubmitting(true);
    }
  }, [addStatus]);
  const handleChange = (event) => {
    if (event.target.name === "cuisine") {
      // For cuisine, split the string by commas to create an array
      setFormData({
        ...formData,
        cuisine: event.target.value.split(",").map((s) => s.trim()),
      });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleItemChange = (e, index) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [e.target.name]: e.target.value };
    setFormData({ ...formData, items: newItems });
  };

  const addItemField = () => {
    // console.log(formData);
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {type:"", name: "", description: "", price: "", image: "", rating: "" },
      ],
    });
  };
  const deleteItem = (e, index) => {
    e.preventDefault();
    let data = formData;
    data.items.splice(index, 1);
    setFormData({
      ...formData,
      items: data.items
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRestaurant(formData));
    navigate("/");
  };

  return (
    <>
      <Link to="/">
        <button className="btn btn-primary">Back to Landing Page</button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter restaurant name"
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </Form.Group>

        <Form.Group controlId="formCuisine">
          <Form.Label>Cuisine</Form.Label>
          <Form.Control
            type="text"
            name="cuisine"
            value={formData.cuisine.join(", ")}
            onChange={handleChange}
            placeholder="Enter cuisines separated by commas"
          />
        </Form.Group>

        <Form.Group controlId="formCostForTwo">
          <Form.Label>Cost for Two</Form.Label>
          <Form.Control
            type="number"
            name="costForTwo"
            value={formData.costForTwo}
            onChange={handleChange}
            placeholder="Enter cost for two"
          />
        </Form.Group>

        <h5>Menu Items</h5>
        {formData.items.map((item, index) => (
          <div key={index}>
            <InputGroup>
              <FormControl
                name="type"
                placeholder="Item type"
                value={item.type}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="name"
                placeholder="Item name"
                value={item.name}
                onChange={(e) => handleItemChange(e, index)}
              />
              {/* <FormControl
                name="description"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(e, index)}
              /> */}
              <FormControl
                name="price"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="image"
                placeholder="Image URL"
                value={item.image}
                onChange={(e) => handleItemChange(e, index)}
              />
              <FormControl
                name="rating"
                placeholder="Rating"
                value={item.rating}
                onChange={(e) => handleItemChange(e, index)}
              />
            </InputGroup>
            <button
              className="btn btn-danger"
              onClick={(e) => deleteItem(e, index)}
            >
              Delete
            </button>
          </div>
        ))}
        <Button variant="secondary" onClick={addItemField}>
          Add Menu Item
        </Button>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Restaurant"}
        </Button>
      </Form>
    </>
  );
};

export default AddRestaurantPage;

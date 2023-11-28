import React,{useState} from "react";
import Navbar from "../navbar";
import Footer from "../Footer/index";
import Loader from "../Loader/index"; // Make sure to import or create a Loader component
import Error from "../Error/index";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";

import {Modal,Button,Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

// class CartData {
//   constructor(image, title, price, category) {
//     this.image = image;
//     this.title = title;
//     this.price = price;
//     this.category = category;
//   }
// }

export default function AddCart(props) {
  
  const { productid,image, title, price, description, category, rating } =
  (props.location.state || {});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  //   const handleClick = (image, title, price, category) => {
  //   let data = new CartData(image, title, price, category);
  //   let dataArray = JSON.parse(localStorage.getItem("Data")) || [];
  //   dataArray.push(data);
  //   localStorage.setItem("Data", JSON.stringify(dataArray));
  //   if (dataArray != null) {
  //     window.open("/add-cart", "_self");
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`http://localhost:3005/images/${image}`}
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
              alt="cartImage"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{title}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <div style={{float:'right'}}>
              <Link to={`/order/${productid}`}>
              <button className='btn btn-primary m-2'>Book Now</button>
            </Link>
                <button className='btn btn-primary m-2' onClick={handleShow}>View Details</button>
            </div>
            <h4>Category: {category}</h4>
            <p className="rating">Rating: {rating}</p>
          </div>
          <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
            <Carousel.Item>
              <img className='d-block w-100 bigimg' src={`http://localhost:3005/images/${image}`} alt="" />
            </Carousel.Item>
    </Carousel>
    <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
}

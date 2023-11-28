import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader/index";
import Error from "../Components/Error/index";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert2";

export default function Order() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const { productid } = useParams();

  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    //   if (!JSON.parse(localStorage.getItem('currentUser')).isAdmin=="true") {
    //     window.location.href = '/login'
    //   }
    async function getData() {
      try {
        setLoading(true);
        // console.log(productid)
        const response = await fetch(
          `http://localhost:3005/product-api/getproductbyid?productid=${productid}`
        );
        const data = await response.json();
        console.log(data);
        setProduct(data);
        setLoading(false);
        setTotalAmount(data.price.$numberDecimal);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, []);

  async function onToken(token) {
    const orderDetails = {
      product,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
      totalAmount,
      token,
    };
    setLoading(true);
    await fetch(`http://localhost:3005/order-api/bookorder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed.");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        swal
          .fire(
            "Congratulations",
            "Your Order Booked Successfully",
            "success"
          )
          .then((result) => (window.location.href = "/all-products"));
      })
      .catch((error) => {
        setLoading(false);
        swal.fire("Oops", "Something went wrong", "error");
      });
  }
  return (
    <div className="m-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : product ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-5">
              <h1>{product.title}</h1>
              {product ? (
                <img
                  className="img-detail"
                  src={`http://localhost:3005/images/${product.image}`}
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                  alt=""
                />
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="col-md-5">
              <h1 style={{ textAlign: "right" }}>Order Details</h1>
              <hr />
              <div style={{ textAlign: "right" }}>
                <b>
                  <p>
                    Name :{product.title}
                    {JSON.parse(localStorage.getItem("currentUser")).name}
                  </p>
                  <p>Max Count : {product.maxCount}</p>
                </b>
              </div>
              <div style={{ textAlign: "right" }}>
                <h1>Amount</h1>
                <hr />
                {product.price && product.price.$numberDecimal && (
                  <b>
                    <p>Total Amount: {product.price.$numberDecimal}</p>
                  </b>
                )}
              </div>
              <div style={{ float: "right" }}>
                <StripeCheckout
                  token={onToken}
                  currency="USD"
                  amount={totalAmount*1000}
                  stripeKey="pk_test_51Nbd37IiTi99yyfxa90z92axcYDrFTcDwrQtK28XIAbqS6cPXwNcrOG57LQjPzTYN2WDsLFqwnBieCW4af7ERJRK00tt0sVSjg"
                >
                  <button className="btn btn-primary">Pay Now</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error message={"Something went wrong, please try again later!"} />
      )}
    </div>
  );
}

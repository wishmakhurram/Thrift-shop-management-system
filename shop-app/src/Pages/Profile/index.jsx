import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import Swal from "sweetalert2";
import './index.css'
import { Tag, Divider } from "antd";
const { TabPane } = Tabs;

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
    if (user.isAdmin == true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);
  const adminPanel = () =>{
    window.location.href = '/admin'
}
  return (
    <div className="m-3 mt-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Profile" key={"1"}>
          <div>
            <h1>My Profile</h1>
            <hr />
            <div style={{ float: "left" }} className="bs row profile-content">
              <div>
                <h1 className="profile-txt" style={{ fontSize: "25px", textTransform: "capitalize" }}>
                  Name : {user.username}
                </h1>
                <h1 className="profile-txt" style={{ fontSize: "25px" }}>
                  Email : <i>{user.email}</i>
                </h1>
                <h1 className="profile-txt" style={{ fontSize: "25px" }}>
                  isAdmin :{" "}
                  <Tag color="blue">{user.isAdmin ? "Yes" : "No"}</Tag>
                </h1>
                {admin && (
                  <button
                   
                    className="btn btn-secondary profile-txt"
                    onClick={adminPanel}
                    style={{ float: "right" }}
                  >
                    Admin Panel
                  </button>
                )}
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Orders" key={"2"}>
          <MyOrder />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;

export function MyOrder() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3005/order-api/getbookingsbyuserid?userId=${user._id}`
        );
        const rooms = await response.json();
        setOrders(rooms);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  async function cancelBooking(orderid, productid) {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3005/order-api/bookings/cancelOrder/?orderid=${orderid}&roomid=${productid}`
      );
      const result = await response.json();

      setLoading(false);
      Swal.fire("Congrats", "Your Booking has been Cancelled", "success");
    } catch (error) {
      setLoading(false);
      setError(true);
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          {orders &&
            orders.map((order) => {
              return (
                <div className="bs">
                  <h1>{order.product}</h1>
                  <p className="bookingtags">
                    <b>Order ID</b> : {order._id}
                  </p>
                  <p className="bookingtags">
                    <b>Check Out</b> : {order.toDate}
                  </p>
                  <p className="bookingtags">
                    <b>Amount</b> : {order.totalAmount}
                  </p>
                  <p className="bookingtags">
                    <b>Status</b> :{" "}
                    {order.status !== "cancelled" ? (
                      <Tag color="red">CANCELLED</Tag>
                    ) : (
                      <Tag color="green">CONFIRMED</Tag>
                    )}
                  </p>

                  {order.status !== "cancelled" && (
                    <div className="text-right">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          cancelBooking(order._id, order.productId);
                        }}
                      >
                        CANCEL ORDER
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

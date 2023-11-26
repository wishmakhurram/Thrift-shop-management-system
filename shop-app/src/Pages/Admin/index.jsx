import React, { useState, useEffect, useRef } from "react";

import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { MdContacts } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { GrUser } from "react-icons/gr";
import { ImUser } from "react-icons/im";
import { Tabs } from "antd";
import { BiHome, BiSolidDashboard } from "react-icons/bi";
import swal from "sweetalert2";
import "./index.css";

const { TabPane } = Tabs;

function Admin() {
  // useEffect(()=>{
  //     if(JSON.parse(localStorage.getItem('currentUser')).isAdmin==false){
  //         // alert('You are not an admin')
  //         // window.location.href = '/'
  //         swal.fire('Oops','You don\'t have admin permission ','error').then(result=>{
  //             window.location.href = '/'
  //         })
  //     }
  // },[])

  const CustomTab = ({ icon, text }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {icon}
      <span style={{ marginLeft: "4px" }}>{text}</span>
    </div>
  );

  return (
    <div className="mt-3 m-3 bs">
      <h2
        style={{ fontSize: "30px", fontWeight: "700" }}
        className="text-center"
      >
        Admin Panel
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={<CustomTab icon={<BiSolidDashboard />} text="Dashboard" />}
          key={"1"}
        >
          <Dashboard />
        </TabPane>
        <TabPane
          tab={<CustomTab icon={<MdContacts />} text="Contact Information" />}
          key={"2"}
        >
          <ContactInformation />
        </TabPane>
        <TabPane
          tab={<CustomTab icon={<HiTemplate />} text="View Products" />}
          key={"3"}
        >
          <ViewProducts />
        </TabPane>
        <TabPane
          tab={
            <CustomTab
              icon={<MdOutlineProductionQuantityLimits />}
              text="Add Products"
            />
          }
          key={"4"}
        >
          <AddProducts />
        </TabPane>
        <TabPane
          tab={<CustomTab icon={<TbReorder />} text="View Orders" />}
          key={"5"}
        >
          <ViewOrders />
        </TabPane>
        <TabPane
          tab={<CustomTab icon={<ImUser />} text="View Customers" />}
          key={"6"}
        >
          <ViewCustomers />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;

// Booking List Component
export function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  // useEffect(async()=>{
  //     try {
  //         setLoading(true)
  //         const response =await fetch('http://localhost:5000/api/bookings/getallbookings');
  //         const data = await response.json()
  //         setBookings(data);
  //         setLoading(false)
  //     } catch (error) {
  //         setLoading(false)
  //         setError(true)
  //     }
  // },[])
  return (
    <div className="container">
      {/* <div className="col-md-12 table-div">
                <h1>Bookings</h1>
                {loading && (<Loader/>)}
                <table className='table table-bordered'>
                    <thead className='bs' style={{backgroundColor:'#1677FF'}}>
                        <tr>
                            <th>Booking Id</th>
                            <th>User Id</th>
                            <th>Room</th>
                            <th>From</th>
                            <th>To</th> 
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map((booking)=>{
                            return <tr>
                                <td>{booking._id}</td>
                                <td>{booking.userId}</td>
                                <td>{booking.room}</td>
                                <td>{booking.fromDate}</td>
                                <td>{booking.toDate}</td>
                                <td>{booking.status}</td>
                            </tr>
                        }))}
                    </tbody>
                </table>
            </div> */}
    </div>
  );
}

export function ContactInformation() {
  return <div></div>;
}
export function ViewProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  // const handleEdit = (productId) => {
  //   EditProduct(productId);
  // };
  const handleDelete = async (productId) => {
    // Implement your delete logic, e.g., show a confirmation modal and delete on confirmation
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        // Make a DELETE request to your backend API to delete the product
        const response = await fetch(
          `http://localhost:3005/product-api/deleteproduct/${productId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          // Successful deletion
          console.log(`Product with ID ${productId} deleted successfully`);
          // Optionally, you can fetch the updated product list or update state to reflect the deletion
        } else {
          // Handle unsuccessful deletion, e.g., show an error message
          console.error(`Failed to delete product with ID ${productId}`);
        }
      } catch (error) {
        // Handle unexpected errors
        console.error(
          `Error deleting product with ID ${productId}: ${error.message}`
        );
      }
    }
  };

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3005/product-api/getallproducts"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);
  return (
    <div className="container">
      <div className="col-md-12 table-div">
        <h1>Products</h1>
        {loading && <Loader />}
        <table className="table table-bordered">
          <thead className="bs" style={{ backgroundColor: "#1677FF" }}>
            <tr>
              <th>Product Id</th>
              <th>Brand</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Title</th>
              <th>Description</th>
              <th>Max Count</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length &&
              products.map((product) => {
                return (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.brand}</td>
                    <td>{product.rating?.$numberDecimal}</td>
                    <td>{product.price?.$numberDecimal}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.maxCount}</td>
                    <td>{product.category}</td>
                    <td>{product.subCategory}</td>
                    <td>
                      <img src={product.image[0]} alt="" />
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        // onClick={() => handleEdit(product._id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// const EditProduct = (productId) => {
//   // const { productId } = useParams();
//   const [product, setProduct] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`http://localhost:3005/product-api/getproduct/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(error.message);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleUpdate = async () => {
//     // Implement your update logic, e.g., make a PUT request to update the product
//     // const updatedProductData = { ...product, updated fields };
//     try {
//       const response = await fetch(`http://localhost:3005/product-api/updateproduct/${productId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedProductData),
//       });

//       if (response.ok) {
//         console.log(`Product with ID ${productId} updated successfully`);
//         // Optionally, you can redirect the user to the product details page or another page
//       } else {
//         console.error(`Failed to update product with ID ${productId}`);
//       }
//     } catch (error) {
//       console.error(`Error updating product with ID ${productId}: ${error.message}`);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h2>Edit Product</h2>
//       <form>
//         {/* Your form fields go here, pre-filled with existing product data */}
//         {/* Example: */}
//         <label>Brand:</label>
//         <input type="text" value={product.brand} onChange={(e) => setProduct({ ...product, brand: e.target.value })} />
//         {/* Add other fields similarly */}
//         <button type="button" onClick={handleUpdate}>
//           Update Product
//         </button>
//       </form>
//     </div>
//   );
// };
export function AddProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [brand, setBrand] = useState();
  const [rating, setRating] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [maxCount, setMaxCount] = useState();
  const [subCategory, setSubCategory] = useState();
  const [category, setCategory] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  // const saveBinaryImage3 = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       setImage3(reader.result);
  //     };
  //     const newImages = URL.createObjectURL(file);
  //     setImage3(newImages);
  //     console.log(newImages);
  //   }
  // };

  // console.log(image1?image1.name:null, image2, image3);
  async function AddProduct() {
    const binaryArray = [];
    binaryArray.push(image1);
    binaryArray.push(image2);
    binaryArray.push(image3);
    console.log(binaryArray);
    // console.log(image);
    // const reader = new FileReader();
    // reader.readAsDataURL(image1);
    // reader.onload = () => {
    //   binaryArray.push(reader.result);
    // };

    // const binaryArray = [];
    // formData.map((i) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(i);
    //   reader.onload = () => {
    //     binaryArray.push(reader.result);
    //   };
    // });

    const newProduct = {
      brand,
      rating,
      maxCount,
      price,
      title,
      description,
      category,
      subCategory,
      image: binaryArray,
    };
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3005/product-api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
          // body: formData,
        }
      );
      const result = await response.json();
      setLoading(false);
      swal
        .fire("Congrats", "New Product Added Successfully", "success")
        .then((result) => {
          window.location.href = "/";
        });
    } catch (error) {
      setLoading(false);
      setError(true);
      swal.fire("Oops", "Something Went Wrong", "error");
    }
  }

  // saleem
  const [image, setImage] = useState("");
  // const inputfile1 = useRef(null);
  // const inputfile2 = useRef(null);
  // const inputfile3 = useRef(null);
  const handleImageInput1 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
      };
      const newImages = URL.createObjectURL(file);
      setImage1(newImages);
    } else {
      console.log("Please Select Image");
    }
  };
  const handleImageInput2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
      };
      const newImages = URL.createObjectURL(file);
      setImage2(newImages);
    } else {
      console.log("Please Select Image");
    }
  };
  const handleImageInput3 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(reader.result);
      };
      const newImages = URL.createObjectURL(file);
      setImage3(newImages);
    } else {
      console.log("Please Select Image");
    }
  };
  // const changeImageDiv = () => {
  //   inputfile1.current.click();
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {loading && <Loader />}
          <input
            type="text"
            className="form-control auth  custom-input"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Brand Name"
            required
          />
          <input
            type="number"
            className="form-control auth custom-input"
            value={rating}
            onChange={(e) => {
              const newRating = e.target.value;
              // Check if the newRating is less than or equal to 5
              if (newRating <= 5) {
                setRating(newRating);
              } else {
                // If greater than 5, show an alert
                alert("Rating must be less than or equal to 5");
              }
            }}
            placeholder="Rating of Product"
            max={5} // Set the maximum value to 5
            required
          />

          <input
            type="number"
            className="form-control auth  custom-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price of Product"
            required
          />
          <input
            type="number"
            className="form-control auth  custom-input"
            value={maxCount}
            onChange={(e) => setMaxCount(e.target.value)}
            placeholder="Max Count"
            required
          />
          <input
            type="text"
            className="form-control auth  custom-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <input
            type="text"
            className="form-control auth  custom-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title of Product"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="form-control auth  custom-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="text"
            name="subcategory"
            placeholder="Sub Category"
            className="form-control auth  custom-input"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          />
          <div className="form-group">
            <label htmlFor="image1" className="custom-label">
              Enter First Image:
            </label>
            <input
              type="file"
              className="form-control auth custom-input"
              id="image1"
              name="image1"
              accept="image/*"
              onChange={handleImageInput1}
              // onChange={(e) => setImage1(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image2" className="custom-label">
              Enter Second Image:
            </label>
            <input
              type="file"
              className="form-control auth custom-input"
              id="image2"
              name="image2"
              accept="image/*"
              onChange={handleImageInput2}
              // onChange={(e) => setImage2(e.target.files[0])}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image3" className="custom-label">
              Enter Third Image:
            </label>
            <input
              type="file"
              className="form-control auth custom-input"
              id="image3"
              name="image3"
              accept="image/*"
              // ref={inputfile3}
              onChange={handleImageInput3}
              // onChange={(e) => setImage3(e.target.files[0])}
              required
            />
          </div>

          {/* <div className="Profile-pic" onClick={changeImageDiv}>
            <img src={image} alt="Loading..." className="Profile-pic" />{" "}
            src={UserImage}
            <input
              type="file"
              name="Pic1"
              ref={inputfile1}
              accept="image/*"
              onChange={handleImageInput}
              style={{ display: "none" }}
              required
            />
          </div> */}

          <div className="text-right" style={{ marginTop: "12px" }}>
            <button
              className="btn btn-primary custom-button"
              onClick={AddProduct}
            >
              Add Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ViewOrders() {
  return <div></div>;
}
export function ViewCustomers() {
  return <div></div>;
}
// Room List Component
export function Rooms() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [rooms, setRooms] = useState([]);
  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/rooms/getallrooms"
      );
      const data = await response.json();
      console.log(data);
      setRooms(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);
  return (
    <div className="container">
      <div className="col-md-12 table-div">
        <h1>Rooms</h1>
        {loading && <Loader />}
        <table className="table table-bordered">
          <thead className="bs" style={{ backgroundColor: "#1677FF" }}>
            <tr>
              <th>Room Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Rent per day</th>
              <th>Max Count</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {rooms.length &&
              rooms.map((room) => {
                return (
                  <tr>
                    <td>{room._id}</td>
                    <td>{room.name}</td>
                    <td>{room.category}</td>
                    <td>{room.rentPerDay}</td>
                    <td>{room.maxCount}</td>
                    <td>{room.phoneNo}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// User List Component

export function Users() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/users/getallusers"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  return (
    <div className="container">
      <div className="col-md-12 table-div">
        <h1>Users</h1>
        {loading && <Loader />}
        <table className="table table-bordered">
          <thead className="bs" style={{ backgroundColor: "#1677FF" }}>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>IsAdmin</th>
            </tr>
          </thead>
          <tbody>
            {users.length &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "YES" : "NO"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Add Room Component

export function AddRoom() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const [name, setName] = useState();
  const [rentPerDay, setRentPerDay] = useState();
  const [maxCount, setMaxCount] = useState();
  const [description, setDescription] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [category, setCategory] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  async function addRoom() {
    const newRoom = {
      name,
      rentPerDay,
      maxCount,
      description,
      phoneNo,
      category,
      imageUrl: [image1, image2, image3],
    };
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/rooms/addroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
      });
      const result = await response.json();
      setLoading(false);
      swal
        .fire("Congrats", "New Room Added Successfully", "success")
        .then((result) => {
          window.location.href = "/";
        });
    } catch (error) {
      setLoading(false);
      setError(true);
      swal.fire("Oops", "Something Went Wrong", "error");
    }
  }
  return (
    <div className="container">
      <div className="col-md-6">
        {loading && <Loader />}
        <input
          type="text"
          className="form-control auth"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="room name"
          required
        />
        <input
          type="number"
          className="form-control auth"
          value={rentPerDay}
          onChange={(e) => setRentPerDay(e.target.value)}
          placeholder="rent per day"
          required
        />
        <input
          type="number"
          className="form-control auth"
          value={maxCount}
          onChange={(e) => setMaxCount(e.target.value)}
          placeholder="max count"
          required
        />
        <input
          type="text"
          className="form-control auth"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          required
        />
        <input
          type="number"
          className="form-control auth"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          placeholder="phone number"
          required
        />
      </div>
      <div className="col-md-6">
        <select
          name=""
          id=""
          className="form-control auth"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled selected>
            type
          </option>
          <option value="delux">Delux</option>
          <option value="non-delux">Non-Delux</option>
        </select>
        <input
          type="text"
          className="form-control auth"
          name="image1"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
          placeholder="enter first image url"
          id=""
          required
        />
        <input
          type="text"
          className="form-control auth"
          name="image2"
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
          placeholder="enter second image url"
          id=""
          required
        />
        <input
          type="text"
          className="form-control auth"
          name="image3"
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
          placeholder="enter third image url"
          id=""
          required
        />
        <div className="text-right">
          <button
            className="btn btn-primary"
            onClick={addRoom}
            style={{ marginTop: "12px" }}
          >
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
}

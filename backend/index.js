const express = require("express");
const database = require("./Utils/db");
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require("path");  // Import the path module
const app = express();
const usersRoute = require("./Routes/userRoute");
const productsRoute = require("./Routes/productRoute");
const ordersRoute = require("./Routes/orderRoute");
const port = 3005;

app.use(bodyParser.json());

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend URL
  credentials: true, // Allow cookies and authorization headers
}));

app.options('*', cors()); 

app.use("/api", usersRoute);
app.use("/product-api", productsRoute);
app.use("/order-api", ordersRoute);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is Listening on PORT: ${port}`);
});

const stripe = require("stripe")("sk_test_51Nbd37IiTi99yyfxIRmDZ5diBkv3iwB58gBqaELdtoqNC40NS7wIQOBJepDZYdJQo4OMPqIFXou7TcfnqzGa6Jor00oPGbjd39");
const Order = require("../Models/orderModel");
const Product = require('../Models/productModel')
const {v4:uuidv4} = require('uuid');



async function stripePayment(req, res) {
  const { product, userId, productId, totalAmount, token } = req.body;
  let success = false;

  try {
      const customer = await stripe.customers.create({
          email: token.email,
          source: token.id
      });

      const payment = await stripe.charges.create({
          amount: totalAmount,
          customer: customer.id,
          currency: "usd",
          receipt_email: token.email,
      }, {
          idempotencyKey: uuidv4(),
      });

      if (payment) {
          try {
              success = true;
              const newOrder = new Order({
                  product: product.title,
                  productId,
                  userId,
                  totalAmount,
                  transectionId: "1234",
              });

              const order = await newOrder.save();
              console.log(order);

              // Find the product by ID
              const producttemp = await Product.findOne({_id:product._id});
              console.log(producttemp);

              // Assuming currentOrder is an array in your product model
              producttemp.currentOrder.push({
                  orderId: order._id,
                  userId: userId,
                  status: order.status
              });

              await producttemp.save();
              res.send(producttemp);
          } catch (error) {
              return res.status(400).json({ error });
          }
      } else {
          res.send("payment not found");
      }

      if (success === true) {
          res.send("Payment Successful, Your order is booked");
      }
  } catch (error) {
      if (success === false) {
          return res.status(400).json({ error });
      }
  }
}

// async function stripePayment(req, res){
//     const { product, userId, productId, totalAmount, token } = req.body;
//     let success = false;
//     try {
//           const customer = await stripe.customers.create(
//               {
//                   email: token.email,
//                   source: token.id
//               }
//           )
//           const payment = await stripe.charges.create({
//             amount: totalAmount ,
//             customer: customer.id,
//             currency: "usd",
//             receipt_email: token.email,
//         }, {
//             idempotencyKey: uuidv4(),
//         });
//           if(payment){
//             // console.log(payment)
//             try {
//               success = true;
//               const newOrder = new Order({
//                 product: product.title,
//                 productId,
//                 userId,
//                 totalAmount,
//                 transectionId: "1234",
//               });
//               // console.log(newOrder)
//               const order = await newOrder.save();
//               const producttemp = await Product.find({ _id: product._id });
//               console.log(producttemp)
//               producttemp.currentOrder.push({
//                 productId: product._id,
//                 userId:userId,
//                 status:order.status
//               });
//               console.log(producttemp)
//               await producttemp.save()
//             res.send(producttemp)
  
//             } catch (error) {
//           return res.status(400).json({error})
              
//             }
           
//           }
//           else{
//             res.send("payment not found")
//           }
//           if(success == true){
//             res.send("Payment Successfull, Your room is booked")
//           }
          
//       } catch (error) {
//         if(success == false){
//           return res.status(400).json({error})
//         }
//       }
  
//   }



async function getOrderByID(req,res){
    const userid = req.body.userId;
    try {
      const orders = await Order.find({userId:userid})
      res.send(orders)
    } catch (error) {
      return res.status(400).json({error})
      
    }
  }
async function cancelOrder(req,res){
    const {orderid,productid} = req.body
    try {
      const orderitem = await Order.findOne({_id:orderid});
      orderitem.status = 'cancelled';
      await orderitem.save();
      const product = await Order.findOne({_id:productid});
      const orders = product.currentOrder;
      const temp = orders.filter(order => order.orderId.toString()!== orderid);
      product.currentOrder = temp;
      await product.save()
      res.send(product)
    } catch (error) {
      return res.status(400).json({error})
    }
}
  
async function getAllOrders(req,res){
    try {
      const orders = await Order.find();
      res.send(orders)
    } catch (error) {
      return res.status(400).json({error})
    }
}

  module.exports = {
    stripePayment,
    getOrderByID,
    cancelOrder,
    getAllOrders
  };
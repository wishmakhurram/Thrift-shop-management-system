const Product = require("../Models/productModel");
const multer = require("multer");
// const { checkout } = require("../Routes/userRoute");
// const { response } = require("express");

// async function stripePayment(req, res) {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "Stubborn Attachments",
//               images: ["https://i.imgur.com/EHyR2nP.png"],
//             },
//             unit_amount: 2000,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "https://localhost:3000/?session_id={CHECKOUT_SESSION_ID}",
//       cancel_url: "https://localhost:3000/",
//     });
//     res.send({url: session.url}).status(200).json({ message: "Payment successful" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message });
//   }
//   checkout().then((url) =>response.redirect(url)).catch((err) => console.log(err));
// }

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });

var upload = multer({ storage: storage });

async function createProduct(req, res) {
  try {
    const { brand, rating, price, description, title, maxCount, category, subCategory } = req.body;

    // Assuming the uploaded file is available at req.file
    const imagePath = req.file.filename;  // Check the exact property based on your Multer setup
    console.log(imagePath);
    const product = await Product.create({
      brand,
      rating,
      price,
      description,
      title,
      maxCount,
      category,
      subCategory,
      image: imagePath,
    });
    console.log(product)
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

// async function createProduct(req, res) {
//   try {
//     // const Images = req.binaryArray;
//     // console.log(Images);
//     console.log(req.body);
    
//     const product = await Product.create(req.body);
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
// async function createProduct(req, res) {
//   try {
//     // Assuming that the image is stored in the public/images folder
//     const imagePath = req.file.path.replace("public/images", "");
//     console.log(imagePath)
//     // Creating a new product with the image path
//     const product = await Product.create({
//       ...req.body,
//       image: imagePath,
//     });

//     res.status(201).json(product);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getProductById(req,res){
  const productid = req.query.productid;
  try {
      const product = await Product.findOne({_id:productid})
      res.send(product)
  } catch (error) {
      return res.status(400).json({error});
  }
}
async function updateProduct(req, res) {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function deleteProduct(req, res) {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
  upload,
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
};

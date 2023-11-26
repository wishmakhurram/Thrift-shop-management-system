import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Error from './Error';
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3005/product-api/getallproducts");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  const truncateWords = (str, numWords) => {
    const wordArray = str.split(' ');
    if (wordArray.length > numWords) {
      return wordArray.slice(0, numWords).join(' ') + '...';
    }
    return str;
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <p><Error/></p>}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="col">
            <div className="card" style={{ borderRadius: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
              <div className="image-container" >
                <img
                  src={'images/pic4.jpg'}
                  className="card-img-top"
                  alt={product.title}
              style={{ objectFit: 'cover',objectPosition:'top'}}
                />
              </div>
              <div className="card-body" style={{ textAlign: 'center', backgroundColor: '#F2F2F2', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
                <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '10px' }}>{product.category}</h5>
                <p className="card-text" style={{ minHeight: '80px' }}>{truncateWords(product.description, 13)}</p>
                <a href='#' style={{ cursor: 'pointer', textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '16px' }}>Shop Now <FaArrowRight /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;



// import React, { useState, useEffect } from 'react';
// import Loader from './Loader';
// import Error from './Error';
// import { FaArrowRight } from "react-icons/fa";

// const Card = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [products, setProducts] = useState([]);

//   useEffect(async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:3005/product-api/getallproducts");
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   }, []);

//   const truncateWords = (str, numWords) => {
//     const wordArray = str.split(' ');
//     if (wordArray.length > numWords) {
//       return wordArray.slice(0, numWords).join(' ') + '...';
//     }
//     return str;
//   };

//   return (
//     <div className="container mt-5">
//       {loading && <Loader />}
//       {error && <p><Error/></p>}
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         {products.slice(0, 4).map((product) => (
//           <div key={product._id} className="col">
//             <div className="card" style={{ borderRadius: '20px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
//               <img
//                 src={'images/pic4.jpg'}
//                 className="card-img-top"
//                 alt={product.title}
//                 style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', objectFit: 'cover', height: '210px' }}
//               />
//               <div className="card-body" style={{ textAlign: 'center', backgroundColor: '#F2F2F2', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
//                 <h5 className="card-title" style={{ fontWeight: 'bold', marginBottom: '10px' }}>{product.category}</h5>
//                 <p className="card-text" style={{ minHeight: '80px' }}>{truncateWords(product.description, 13)}</p>
//                 <a href='#' style={{ cursor: 'pointer', textDecoration: 'none', color: '#000', fontWeight: 'bold', fontSize: '16px' }}>Shop Now <FaArrowRight /></a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;


// import React, { useState, useEffect } from 'react';
// import Loader from './Loader'; // Make sure to import or create a Loader component
// import Error from './Error';
// import { FaArrowRight } from "react-icons/fa"; 

// const Card = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [products, setProducts] = useState([]);

//   useEffect(async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:3005/product-api/getallproducts");
//       const data = await response.json();
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   }, []);

//   // Function to truncate a string to a specified number of words
//   const truncateWords = (str, numWords) => {
//     const wordArray = str.split(' ');
//     if (wordArray.length > numWords) {
//       return wordArray.slice(0, numWords).join(' ') + '...';
//     }
//     return str;
//   };

//   return (
//     <div className="container mt-5">
//       {loading && <Loader />}
//       {error && <p><Error/></p>}
//       <div className="row row-cols-1 row-cols-md-4 g-4">
//         {products.slice(0, 4).map((product) => (
//           <div key={product._id} className="col">
//             <div className="card" style={{ height: '400px', borderRadius: '20px' /* Set your fixed height */ }}>
//               <img
//                 src={'images/pic4.jpg'}
//                 className="card-img-top"
//                 alt={product.title}
//                 style={{ height: '210px', objectFit: 'cover',objectPosition: 'top' /* Set your fixed height and object-fit property */ }}
//               />
//               <div className="card-body" style={{ textAlign: 'center', backgroundColor: '#F2F2F2' }}>
//                 <h5 className="card-title" style={{fontWeight:'bold'}}>{product.category}</h5>
                
//                 <p className="card-text">{truncateWords(product.description, 13)}</p>
//                 <a href='#'  style={{cursor:'pointer',textDecoration:'none',color:'#000',fontWeight:'bold',fontSize:'16px'}}>Shop Now <FaArrowRight/></a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;


// {/* <ul className="list-group list-group-flush">
//                 <li className="list-group-item">Brand: {product.brand}</li>
//                 <li className="list-group-item">Rating: {product.rating?.$numberDecimal}</li>
//                 <li className="list-group-item">Price: ${product.price?.$numberDecimal}</li>
//               </ul> */}

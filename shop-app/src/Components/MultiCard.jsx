import Carousel from 'react-grid-carousel';
import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
const renderStars = (rating) => {
  const maxStars = 5;
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <span key={index} className={index < roundedRating ? 'star-filled' : 'star-empty'}>
      <FaStar/>
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

const truncateTitle = (title, wordCount) => {
  if (!title) {
    return '';
  }
  const words = title.split(' ');
  const truncatedWords = words.slice(0, wordCount);
  return truncatedWords.join(' ');
};

const MultiCard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3005/product-api/getallproducts');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <div style={{ margin: '100px 0' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '60px' }}>New For You</h2>
        <div style={{ width: '98vw', margin: 'auto' }}>
          <Carousel cols={6} rows={1} gap={15} showDots>
            {products.map((product, index) => (
              <Carousel.Item key={index}>
                <img
                  className='image-card'
                  src={'images/pic2.jpg'}
                  alt={product.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <p style={{fontWeight:'bold'}}>{truncateTitle(product.title, 4)}</p>
                <p style={{fontSize:'20px',color:'#FFD233'}}>{renderStars(product.rating?.$numberDecimal)}</p>
                <p style={{fontWeight:'bold'}}>${product.price?.$numberDecimal}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MultiCard;



// import Carousel from 'react-grid-carousel';
// import React, { useState, useEffect } from 'react';
// import { FaCircle } from 'react-icons/fa';

// const renderStars = (rating) => {
//   const maxStars = 5;
//   const roundedRating = Math.round(rating);
//   const stars = Array.from({ length: maxStars }, (_, index) => (
//     <span key={index} className={index < roundedRating ? 'star-filled' : 'star-empty'}>
//       ★
//     </span>
//   ));

//   return <div className="star-rating">{stars}</div>;
// };

// const truncateTitle = (title, wordCount) => {
//   if (!title) {
//     return '';
//   }
//   const words = title.split(' ');
//   const truncatedWords = words.slice(0, wordCount);
//   return truncatedWords.join(' ');
// };

// const MultiCard = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:3005/product-api/getallproducts');
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalIcons = Math.ceil(products.length / 6);

//   const handleIconClick = (iconIndex) => {
//     setSelectedCard(iconIndex * 6);
//   };

//   const handleCarouselChange = (currentIndex) => {
//     setSelectedCard(currentIndex * 6);
//   };

//   return (
//     <div>
//       <div style={{ margin: '100px 0' }}>
//         <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '60px' }}>New For You</h2>
//         <div style={{ width: '98vw', margin: 'auto' }}>
//           <Carousel cols={6} rows={1} gap={15} autoplay={3000} hideArrow loop value={selectedCard} afterChange={handleCarouselChange}>
//             {products.map((product, index) => (
//               <Carousel.Item key={index}>
//                 <img
//                   className='image-card'
//                   src={'images/pic2.jpg'}
//                   alt={product.title}
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//                 <p>{truncateTitle(product.title, 4)}</p>
//                 <p>{renderStars(product.rating?.$numberDecimal)}</p>
//                 <p>${product.price?.$numberDecimal}</p>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//           <div style={{ textAlign: 'center', marginTop: '10px' }}>
//             {Array.from({ length: totalIcons }).map((_, iconIndex) => (
//               <FaCircle
//                 key={iconIndex}
//                 className={`carousel-icon ${iconIndex === selectedCard / 6 ? 'selected' : ''}`}
//                 onClick={() => handleIconClick(iconIndex)}
//                 style={{ color: iconIndex === selectedCard / 6 ? 'red' : 'black' }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiCard;


// import Carousel from 'react-grid-carousel';
// import React, { useState, useEffect } from 'react';
// import { FaCircle } from 'react-icons/fa';

// const renderStars = (rating) => {
//   const maxStars = 5;
//   const roundedRating = Math.round(rating);
//   const stars = Array.from({ length: maxStars }, (_, index) => (
//     <span key={index} className={index < roundedRating ? 'star-filled' : 'star-empty'}>
//       ★
//     </span>
//   ));

//   return <div className="star-rating">{stars}</div>;
// };

// const truncateTitle = (title, wordCount) => {
//   if (!title) {
//     return '';
//   }
//   const words = title.split(' ');
//   const truncatedWords = words.slice(0, wordCount);
//   return truncatedWords.join(' ');
// };

// const MultiCard = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('http://localhost:3005/product-api/getallproducts');
//         const data = await response.json();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     };

//     fetchData();
//   }, []);

//   const totalIcons = Math.ceil(products.length / 6);

//   const handleIconClick = (iconIndex) => {
//     setSelectedCard(iconIndex * 6);
//   };

//   return (
//     <div>
//       <div style={{ margin: '100px 0' }}>
//         <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '60px' }}>New For You</h2>
//         <div style={{ width: '98vw', margin: 'auto' }}>
//           <Carousel cols={6} rows={1} gap={15} autoplay={3000} hideArrow loop value={selectedCard}>
//             {products.map((product, index) => (
//               <Carousel.Item key={index}>
//                 <img
//                   className='image-card'
//                   src={'images/pic2.jpg'}
//                   alt={product.title}
//                   style={{ width: '100%', height: 'auto' }}
//                 />
//                 <p>{truncateTitle(product.title, 4)}</p>
//                 <p>{renderStars(product.rating?.$numberDecimal)}</p>
//                 <p>${product.price?.$numberDecimal}</p>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//           <div style={{ textAlign: 'center', marginTop: '10px' }}>
//             {Array.from({ length: totalIcons }).map((_, iconIndex) => (
//               <FaCircle
//                 key={iconIndex}
//                 className={`carousel-icon ${iconIndex === selectedCard / 6 ? 'selected' : ''}`}
//                 onClick={() => handleIconClick(iconIndex)}
//                 style={{ color: iconIndex === selectedCard / 6 ? 'red' : 'black' }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiCard;


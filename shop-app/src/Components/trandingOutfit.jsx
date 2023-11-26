import Carousel from 'react-grid-carousel';
import React, { useState, useEffect } from 'react';

const TrandingOutfit = () => {

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
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>Shop The Look</h2>
        <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '60px', fontSize:'12px' }}>Trending Outfits Of Summer</p>
        <div style={{ width: '98vw', margin: 'auto',textAlign:'center' }}>
          <Carousel cols={2} rows={1} gap={10} hideArrow>
            {products.map((product, index) => (
              <Carousel.Item key={index}>
                <img
                  className='image-card'
                  src={'images/pic4.jpg'}
                  alt={product.title}
                  style={{height: '600px',width:'92%',borderRadius:'40px', objectFit: 'cover',objectPosition: 'top'  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default TrandingOutfit

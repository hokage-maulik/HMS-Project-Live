
// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function Hoteldetail() {
//   const [product, setProduct] = useState({});
//   const { hotelId } = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/hotel/get/${hotelId}`)
//       .then((res) => {
//         console.log(res.data);
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [hotelId]);

//   return (
//     <div>
//       <h1>Hotel Details</h1>

//       <Link to={`/booking/${product._id}`}>
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{ maxWidth: '200px', height: 'auto', cursor: 'pointer' }}
//         />
//       </Link>

//       <p>{product.name}</p>
//       <p>{product.description}</p>
//       <p>{product.price}</p>

//       <Link to={`/booking/${product._id}`}>
//         <button>Book Now</button>
//       </Link>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Hoteldetail() {
  const [product, setProduct] = useState({});
  const { hotelId } = useParams();

  useEffect(() => {
    axios
      .get(`https://hms-backend-1-1.onrender.com/hotel/get/${hotelId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hotelId]);

  const containerStyle = {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
  };

  const descriptionStyle = {
    fontSize: '18px',
    color: '#7f8c8d',
    marginBottom: '20px',
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const buttonHoverStyle = {
    backgroundColor: '#2980b9',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hotel Details</h1>

      <Link to={`/booking/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          style={imageStyle}
          onMouseOver={(e) => (e.target.style.opacity = '0.9')}
          onMouseOut={(e) => (e.target.style.opacity = '1')}
        />
      </Link>

      <p style={headingStyle}>{product.name}</p>
      <p style={descriptionStyle}>{product.description}</p>
      <p style={priceStyle}>Price: ${product.price}/Per Night</p>

      <Link to={`/booking/${product._id}`} style={buttonStyle}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Book Now
        </button>
      </Link>
    </div>
  );
}

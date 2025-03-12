// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Hotel() {
//     const[hotel,setHotel]=useState([])

//     useEffect(()=>{
//            axios.get("http://localhost:8000/hotel/get")
//            .then((res)=>{
//             setHotel(res.data)
//            })
//            .catch((error)=>{
//             console.log(error)
//            })
//     },[])
//   return (
//     <div>Hotel
        
//         {hotel.map((el,i)=>{
//             return <li>
//                 <Link to={`/hoteldetail/${el._id}`}>
//                 <img src={el.image} alt={el.name} style={{ maxWidth: '200px', height: 'auto' }} />
                    
//                    <h2>{el.name}</h2>
//                 </Link>
//             </li>
//         })}
//     </div>
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hotel() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios
      .get("https://hms-backend-1-1.onrender.com/hotel/get")
      .then((res) => {
        setHotel(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const containerStyles = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const listStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const cardStyles = {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const cardHoverStyles = {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const imageStyles = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const titleStyles = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    margin: '15px 0',
  };

  const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div style={containerStyles}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Available Hotels</h1>
      <ul style={listStyles}>
        {hotel.map((el, i) => {
          return (
            <li
              key={i}
              style={cardStyles}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = cardHoverStyles.transform;
                e.currentTarget.style.boxShadow = cardHoverStyles.boxShadow;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = cardStyles.boxShadow;
              }}
            >
              <Link to={`/hoteldetail/${el._id}`} style={linkStyles}>
                <img src={el.image} alt={el.name} style={imageStyles} />
                <h2 style={titleStyles}>{el.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

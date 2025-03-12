// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // export default function Booking() {
// //   const [booking, setBooking] = useState([]);
// //   const [persons, setPersons] = useState(''); 
// //   const [room, setRoom] = useState(''); 
// //   const { hotelId } = useParams();


// //   useEffect(() => {
// //     axios.get(`http://localhost:8000/booking/get/${hotelId}`)
// //       .then((res) => {
// //         console.log(res.data);
// //         setBooking(res.data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   }, []);

// //   const handleAddToCart = async (e) => {
// //     e.preventDefault();

// //     if (!persons || !room) {
// //       console.error('Please enter both the number of persons and room number.');
// //       return;
// //     }

// //     try {
// //       const response = await axios.post(`http://localhost:8000/booking/add`, {
// //         persons: parseInt(persons, 10), 
// //         roomno: parseInt(room, 10), 

// //       });

// //       console.log(response.data);
// //       alert('Booking added successfully!');

// //       setBooking((prev) => [...prev, response.data]);
// //       setPersons('');
// //       setRoom('');
// //     } catch (err) {
// //       console.error(err);
// //       alert('Error adding booking. Please try again.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Booking</h1>
// //       <form onSubmit={handleAddToCart}>
// //         <input
// //           type="number"
// //           placeholder="How many people?"
// //           value={persons}
// //           onChange={(e) => setPersons(e.target.value)}
// //         />

// //         <input
// //           type="string"
// //           placeholder="Your room  is"
// //           value={room}
// //           onChange={(e) => setRoom(e.target.value)}
// //         />

// //         <button type="submit">Booking</button>
// //       </form>

// //       <ul>
// //         {booking.map((el, i) => (
// //           <li key={i}>
// //             <p>Room No: {el.roomno}</p>
// //             <p>Persons: {el.persons}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export default function Booking() {
//   const [booking, setBooking] = useState([]);
//   const [persons, setPersons] = useState(''); 
//   const [room, setRoom] = useState(''); 
//   const { hotelId } = useParams(); 

//   useEffect(() => {
//     if (hotelId) {
//       axios.get(`http://localhost:8000/booking/get/${hotelId}`)
//         .then((res) => {
//           console.log(res.data);
//           setBooking(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [hotelId]);

//   const handleAddToCart = async (e) => {
//     e.preventDefault();

//     if (!persons || !room) {
//       console.error('Please enter both the number of persons and room number.');
//       return;
//     }

//     try {
//       const response = await axios.post(`http://localhost:8000/booking/add`, {
//         hotelId, // Associate booking with the current hotel
//         persons: parseInt(persons, 10), 
//         roomno: parseInt(room, 10), 
//       });

//       console.log(response.data);
//       alert('Booking added successfully!');

//       setBooking((prev) => [...prev, response.data]); // Update the booking list
//       // setPersons('');
//       // setRoom('');
//     } catch (err) {
//       console.error(err);
//       alert('Error adding booking. Please try again.');
//     }
//   };

//   return (
//     <div>
//       {/* <h1>Booking for Hotel ID: {hotelId}</h1> */}
//       <h1>Booking</h1>
//       <form onSubmit={handleAddToCart}>
//         <input
//           type="number"
//           placeholder="How many people?"
//           value={persons}
//           onChange={(e) => setPersons(e.target.value)}
//         />

//         <input
//           type="string"
//           placeholder="Your room is"
//           value={room}
//           onChange={(e) => setRoom(e.target.value)}
//         />

//         <button type="submit">Book</button>
//       </form>

//       <ul>
//         {booking.map((el, i) => (
//           <li key={i}>
//             <p>Room No: {el.roomno}</p>
//             <p>Persons: {el.persons}</p>
//             <p>Hotel ID: {el.name}</p>
//             <p>Email:{el.email}</p>
//             <p>Phone:{el.phone}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Booking() {
  const [booking, setBooking] = useState([]);
  const [persons, setPersons] = useState('');
  const [room, setRoom] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { hotelId } = useParams();

  useEffect(() => {
    if (hotelId) {
      axios.get(`https://hms-backend-1-1.onrender.com/booking/get/${hotelId}`)
        .then((res) => {
          console.log(res.data);
          setBooking(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [hotelId]);

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (!persons || !room || !email || !phone) {
      console.error('Please enter all the required details.');
      return;
    }

    try {
      const response = await axios.post(`https://hms-backend-1-1.onrender.com`, {
        hotelId, // Associate booking with the current hotel
        persons: parseInt(persons, 10),
        roomno: parseInt(room, 10),
        email,
        phone
      });

      console.log(response.data);
      alert('Booking added successfully!');

      setBooking((prev) => [...prev, response.data]); // Update the booking list
      setPersons('');
      setRoom('');
      setEmail('');
      setPhone('');
    } catch (err) {
      console.error(err);
      alert('Error adding booking. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Booking</h1>
      <form onSubmit={handleAddToCart} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="persons">Number of Persons</label>
          <input
            type="number"
            id="persons"
            placeholder="How many people?"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="room">Room Number</label>
           <input
            type="text"
            id="room"
            placeholder="Room number will be assigned"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            // disabled
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f5f5f5' }}
          /> 
         
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Book Now
        </button>
      </form>

      <h2 style={{ marginTop: '40px', textAlign: 'center' }}>Bookings List</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {booking.map((el, i) => (
          <li key={i} style={{ padding: '15px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' }}>
            <p><strong>Room No:</strong> {el.roomno}</p>
            <p><strong>Persons:</strong> {el.persons}</p>
            <p><strong>Email:</strong> {el.email}</p>
            <p><strong>Phone:</strong> {el.phone}</p>
            {/* <p><strong>Hotel Name:</strong> {el.hotelId.name}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// import axios from 'axios'
// import React, { useState } from 'react'

// export default function Login() {
//     const [state, setState] = useState({
//         email: "",
//         password: ""
//     })

//     const handleChange = (e) => {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         if (!state.email || !state.password) {
//             alert("Please fill in both email and password.")
//             return
//         }

//         try {
//             const response = await axios.post("http://localhost:8000/user/login", state)
//             alert("Login successful")
//             setState({ email: "", password: "" })
//             console.log(response.data)
//         } catch (error) {
//             console.error("Error details:", error.response ? error.response.data : error.message)
//             alert("Login failed")
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
//                 <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
//                 <input type="submit" value="Login" />
//             </form>
//         </div>
//     )
// }


import axios from 'axios';
import React, { useState } from 'react';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      setError('Please fill in both email and password.');
      return;
    }

    try {
      const response = await axios.post('https://hms-backend-1-1.onrender.com/user/login', state);
      if (response.status === 200) {
        alert('Login successful');
        setState({ email: '', password: '' });
        setError('');
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  submitButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    color: '#FF0000',
    textAlign: 'center',
    marginBottom: '20px',
  },
};

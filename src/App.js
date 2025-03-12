import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking';
// import Hotel from './Components/Hotel';
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Home from './Components/Home';
import Hoteldetail from './Components/Hoteldetail';
import Navbar from './Components/Navbar';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />



        {/* <Route path='/Hotel' element={<Hotel />} /> */}

        <Route path='/hoteldetail/:hotelId' element={<Hoteldetail />} />


        


         
        <Route path='/booking/:hotelId' element={<Booking/>}/>


      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Signup from "./Components/Signup";
import Booking from "./Components/Bookings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;

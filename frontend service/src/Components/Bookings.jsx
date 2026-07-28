import { useLocation, Link } from "react-router-dom";

const Booking = () => {
  const { state } = useLocation();

  const { product, quantity } = state || {};

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No booking details found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 shadow-xl w-full max-w-md">
        <div className="card-body">
          <h2 className="card-title">Booking Details</h2>

          <p>
            <span className="font-semibold">Product:</span> {product.name}
          </p>

          <p>
            <span className="font-semibold">Description:</span>{" "}
            {product.description}
          </p>

          <p>
            <span className="font-semibold">Required Quantity:</span> {quantity}
          </p>

          <div className="divider"></div>

          <label className="label">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />

          <label className="label">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="input input-bordered w-full"
          />

          <label className="label">Address</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Enter delivery address"
          ></textarea>

          <button className="btn btn-primary mt-4">Confirm Booking</button>

          <Link to="/products" className="btn btn-outline mt-2">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;

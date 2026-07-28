import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md item-center border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <Link to="/products" className="btn btn-neutral mt-4">
          Login
        </Link>
        <Link to="/signup" className="btn btn-neutral mt-4">
          Sign Up
        </Link>
      </fieldset>
    </div>
  );
};

export default Login;

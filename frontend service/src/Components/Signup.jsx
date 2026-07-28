import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = () => {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else if (!name || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    } else {
      alert(`${name}, you have signed up successfully!`);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="label">Full Name</label>
        <input
          type="text"
          className="input"
          id="name"
          placeholder="Full Name"
        />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          id="password"
          placeholder="Password"
        />

        <label className="label">Confirm Password</label>
        <input
          type="password"
          className="input"
          id="confirmPassword"
          placeholder="Confirm Password"
        />

        <button className="btn btn-primary mt-4" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="link link-primary">
            Login
          </Link>
        </p>
      </fieldset>
    </div>
  );
};

export default Signup;

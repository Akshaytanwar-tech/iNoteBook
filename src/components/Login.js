import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [crediential, setcrediential] = useState({
    email: "",
    password: "",
  });
  const onchange = (e) => {
    setcrediential({ ...crediential, [e.target.name]: e.target.value });
  };
  const handlesignin = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: crediential.email,
        password: crediential.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      alert("worng crediantial");
    }
  };
  return (
    <div className="container">
      <div className="h1 text-center my-3">Log In</div>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            value={crediential.email}
            onChange={onchange}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={crediential.password}
            onChange={onchange}
          />
        </div>

        <div className="row mb-4">
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handlesignin}
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

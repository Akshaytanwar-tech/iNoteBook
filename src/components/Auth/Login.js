import React, { useState, useContext } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import NoteContext from "../../context/NoteContext";

const Login = () => {
  let navigate = useNavigate();
  const context = useContext(NoteContext);
  const { SignIn } = context;

  const [crediential, setcrediential] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setcrediential({ ...crediential, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SignIn(crediential.email, crediential.password).then((res) => {
      localStorage.setItem("token", res.token);
      navigate("/");
    });
  };

  return (
    <>
      <div class="container">
        <div
          class="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div class="col-md-4">
            <div class="card card-login p-4">
              <h5 class="card-title card-title-login mb-4">Login</h5>
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control form-control-login"
                    id="email"
                    placeholder="Enter email"
                    value={crediential.email}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control form-control-login"
                    id="password"
                    placeholder="Password"
                    value={crediential.password}
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-primary-login">
                  Login
                </button>
              </form>
              
              <div class="register-link register-link-login mt-3">
                <p>
                  Not a member? <Link to="/signup">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

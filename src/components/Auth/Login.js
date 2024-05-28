import React, { useState, useContext } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import config from "../../config";
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
    // <div className="container">
    //   <div className="h1 text-center my-3">Log In</div>
    //   <form>
    //     <div className="form-outline mb-4">
    //       <label className="form-label" htmlFor="form2Example1">
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         id="form2Example1"
    //         className="form-control"
    //         name="email"
    //         value={crediential.email}
    //         onChange={onchange}
    //       />
    //     </div>

    //     <div className="form-outline mb-4">
    //       <label className="form-label" htmlFor="form2Example2">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="form2Example2"
    //         className="form-control"
    //         name="password"
    //         value={crediential.password}
    //         onChange={onchange}
    //       />
    //     </div>

    //     <button
    //       type="submit"
    //       className="btn btn-primary btn-block mb-4"
    //       onClick={handlesignin}
    //     >
    //       Sign in
    //     </button>

    //     <div className="text-center">
    //       <p>
    //         Not a member? <Link to="/signup">Register</Link>
    //       </p>
    //     </div>
    //   </form>
    // </div>
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
              <div class="forgot-password forgot-password-login mt-3">
                <a href="/">Forgot password?</a>
              </div>
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

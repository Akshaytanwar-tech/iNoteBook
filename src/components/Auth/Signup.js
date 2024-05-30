import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import NoteContext from "../../context/NoteContext";

const Signup = () => {
  let navigate = useNavigate();
  let context = useContext(NoteContext);
  const { Signup } = context;
  const [crediential, setcrediential] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    photo: null,
  });
  const onchange = (e) => {
    let value = e.target.name === "photo" ? e.target.files[0] : e.target.value;
    setcrediential({
      ...crediential,
      [e.target.name]: value,
    });
  };
  const onsubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(); //formdata object

    formData.append("username", crediential.username); //append the values with key, value pair
    formData.append("email", crediential.email);
    formData.append("mobile", crediential.mobile);
    formData.append("photo", crediential.photo);
    formData.append("password", crediential.password);

    Signup(formData).then((res) => {
      localStorage.setItem("token", res.token);
      navigate("/");
    });
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={onsubmit}>
                <div class="mb-3">
                  <input
                    name="username"
                    type="text"
                    value={crediential.username}
                    class="form-control"
                    placeholder="Name"
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={crediential.email}
                    class="form-control"
                    placeholder="Email"
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="tel"
                    name="mobile"
                    class="form-control"
                    placeholder="Mobile Number"
                    value={crediential.mobile}
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="file"
                    name="photo"
                    class="form-control"
                    id="photo"
                    onChange={onchange}
                    accept="image/*"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    value={crediential.password}
                    onChange={onchange}
                    required
                  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

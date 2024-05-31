import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import "../../App.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <header class="header-homepage">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <Link class="navbar-brand" to="/">
                @Student
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="px-2"></li>
                  <li class="nav-item">
                    {!localStorage.getItem("token") ? (
                      <Link class="button nav-link" to="/login">
                        Login
                      </Link>
                    ) : (
                      <button
                        type="button"
                        class="btn btn-warning"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div class="welcome-section">
        <div class="container">
          <h1>Welcome to @Student</h1>
          <p class="lead">Your all-in-one tool for academic success</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Link to="/notes" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Save Notes</h5>
                  <p class="card-text">
                    Easily save and organize your study notes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/schedule" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Daily Schedule</h5>
                  <p class="card-text">
                    Keep track of your daily activities and classes.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/sprint" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Plan Sprint</h5>
                  <p class="card-text">
                    Set goals and plan sprints to achieve them.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/todo" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">To-Do List</h5>
                  <p class="card-text">
                    Stay organized with a to-do list for your tasks.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <Link to="/implink" class="text-decoration-none">
              <div class="card feature-card-homepage bg-light">
                <div class="card-body">
                  <h5 class="card-title">Important Links</h5>
                  <p class="card-text">
                    Track your grades and academic progress.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <footer class="footer-homepage">
        <div class="container">
          <p>&copy; 2024 akshay tanwar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

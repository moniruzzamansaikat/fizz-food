import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function SignUp() {
  const { signUp, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    signUp(name, email, password);
  };

  // if user is logged in, redirect to home page
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  });

  return (
    <div className="signin container my-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <form action="" onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-custom">
                  Sign Up
                </button>
                <Link className="d-block text-center mt-3" to="/sign-in">
                  I already have an account
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

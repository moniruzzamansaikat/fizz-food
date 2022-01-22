import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/Signin.css';

function SignIn() {
  const { signInWithGoogle, signIn, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password);
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
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-custom">
                  Sign In
                </button>
                <Link className="d-block text-center mt-3" to="/sign-up">
                  I don't have an account
                </Link>
                <hr />
                <p className="text-center text-muted">OR</p>
                <button
                  type="button"
                  className="btn btn-custom google"
                  onClick={signInWithGoogle}
                >
                  <img src="/img/google.svg" alt="" />
                  <span>Sign in with Google</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

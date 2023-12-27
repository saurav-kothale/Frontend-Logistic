import React, { useState } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email_id, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Clicked on login")
    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_id,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data["access"]["access_token"])
        const { access_token } = data["access"]["access_token"];

        // Save the token to localStorage or a secure storage method
        localStorage.setItem('token', access_token);

        // Redirect to the dashboard page
        history('/dashboard');
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={styles.logincontainer}>
      {/* <h2>Login</h2>
      <form>
        <div className={styles.inputGroup}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={email_id}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="button" className={styles.loginBtn} onClick={handleLogin}>
          Login
        </button>
      </form> */}

<main className="form-signin">
        <form onSubmit={handleLogin}>
          <img
            className="mb-4"
            src="/src/assets/parcel-box-package-icon.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email_id}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className={`form-floating ${styles.passwordStyle}`} >
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className={`w-100 btn btn-lg btn-primary ${styles.submitButton}`} type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2023–2025</p>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;
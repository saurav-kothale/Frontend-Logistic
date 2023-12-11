import React, { useState } from 'react';
import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email_id, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async () => {
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
    <div className={styles.LoginForm}>
      <h2>Login</h2>
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
      </form>
    </div>
  );
};

export default LoginForm;
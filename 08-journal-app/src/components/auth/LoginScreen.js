import React from 'react';

export const LoginScreen = () => {
  return (
    <>
        <h3>Login</h3>
        <input
            type="text"
            placeholder="Email"
            name="email"
        />
        <input
            type="password"
            placeholder="Password"
            name="password"
        />
        <button
            type="submit"
        >
            Login
        </button>
        <hr />
        gogole
    </>
  );
};
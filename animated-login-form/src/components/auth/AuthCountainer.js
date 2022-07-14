import React from "react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

const AuthCountainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const [reset, setReset] = useState(false);

  const handleLogin = () => {
    setAuth({
      login: true,
      register: false,
      reset: false,
    });
    // setReset(false);
    // setRegister(false);
    // setLogin(true);
  };

  const handleRegister = () => {
    setAuth({
      login: false,
      register: true,
      reset: false,
    });
    // setLogin(false);
    // setRegister(true);
    // setReset(false);
  };

  const handleReset = () => {
    setAuth({
      login: false,
      register: false,
      reset: true,
    });
    // setLogin(false);
    // setReset(true);
    // setRegister(false);
  };

  return (
    <section className="--flex-center --100vh --bg-grey">
      <div className="container box">
        {auth.login && (
          <Login onRegister={handleRegister} onReset={handleReset} />
        )}
        {auth.register && <Register onLogin={handleLogin} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthCountainer;

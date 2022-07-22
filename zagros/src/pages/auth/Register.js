import React, { useState } from "react";
import styles from "./auth.module.scss";
import registerImg from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(null);

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Password do not match");
    }
    setIsLoading(true);
  };

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <section className={`container ${styles.auth}`}>
        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "5px",
          }}
        >
          <div className={styles.form}>
            <h2>S'inscrire</h2>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Confirmez le mot de passe"
                required
                value={cpassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ borderRadius: "3px" }}
                >
                  S'inscrire
                </Button>
              </div>
            </form>
            <span className={styles.register}>
              <p>Vous avez déjà un compte? </p>{" "}
              <Link to="/login">Conecter</Link>
            </span>
          </div>
        </div>

        <div className={styles.img}>
          <img src={registerImg} alt="register" width={400} />
        </div>
      </section>
    </>
  );
};

export default Register;

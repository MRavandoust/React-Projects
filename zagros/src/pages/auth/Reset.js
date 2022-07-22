import React, { useState } from "react";
import styles from "./auth.module.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const reserPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };
  return (
    <>
      {/* {isLoading && <Loader />} */}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt="Reset Password" width={400} />
        </div>

        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "5px",
          }}
        >
          <div className={styles.form}>
            <h2>Réinitialiser le mot de passe</h2>
            <form onSubmit={reserPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ borderRadius: "3px" }}
                >
                  Réinitialiser le mot de passe
                </Button>
              </div>

              <div className={styles.links}>
                <p>
                  <Link to="/login">-Conecter</Link>
                </p>
                <p>
                  <Link to="/register">-S'inscrire</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reset;

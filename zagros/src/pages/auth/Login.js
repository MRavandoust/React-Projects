import { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(null);

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  //const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {};

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="login" width={400} />
        </div>

        <div
          style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: "5px",
          }}
        >
          <div className={styles.form}>
            <h2>Connecter</h2>
            <Form onSubmit={loginUser}>
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
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ borderRadius: "3px" }}
                >
                  Conecter
                </Button>
              </div>
              <div className={styles.links}>
                <Link to="/reset-password">Mot de passe oublié ?</Link>
              </div>
              <p>-- ou --</p>
            </Form>
            <div className="d-grid gap-2">
              <Button
                onClick={signInWithGoogle}
                variant="primary"
                type="submit"
                style={{ borderRadius: "3px" }}
              >
                <FaGoogle color="#fff" /> &nbsp; Connectez-vous avec Google
              </Button>
            </div>

            <span className={styles.register}>
              <p>Vous n'avez pas de compte ? </p>
              <Link to="/register">S'inscrire</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

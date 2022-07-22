import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.svg";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img
              src={logo}
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <ul className="nav-item">
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/">Menus</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallerie</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </Nav>
            <Nav>
              <ul className="nav-item">
                <li>
                  <Link to="/login">Mon compte</Link>
                </li>
                <li>
                  <Link to="/cart">
                    <FaOpencart size={23} />
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

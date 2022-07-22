import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      Copyright &copy; 2021-{year} &nbsp; <Link to="/"> GRILL-ISTANBUL </Link>
      <br />
      All Rights Reserved
    </div>
  );
};

export default Footer;

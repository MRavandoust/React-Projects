import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={{ margin: "auto" }}>Success</Toolbar>
        </AppBar>
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with futther instractions</p>
      </React.Fragment>
    );
  }
}

export default Success;

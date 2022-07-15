import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={{ margin: "auto" }}>Enter User Details</Toolbar>
        </AppBar>

        <br />
        <TextField
          hintText="Enter Your First Name"
          id="standard-search"
          label="First Name"
          type="text"
          variant="standard"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <br />
        <TextField
          hintText="Enter Your Lase Name"
          id="standard-search"
          label="Last Name"
          type="text"
          variant="standard"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <br />
        <TextField
          hintText="Enter Your Email"
          id="standard-search"
          label="Email"
          type="email"
          variant="standard"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;

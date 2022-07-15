import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/system";
import { TextField } from "@mui/material";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={{ margin: "auto" }}>Enter Personal Details</Toolbar>
        </AppBar>

        <br />
        <TextField
          hintText="Enter Occupation"
          id="standard-search"
          label="Occupation"
          type="text"
          variant="standard"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <br />
        <TextField
          hintText="Enter Your City"
          id="standard-search"
          label="City"
          type="text"
          variant="standard"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <br />
        <TextField
          hintText="Enter Your Bio"
          id="standard-search"
          label="Bio"
          type="text"
          variant="standard"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <br />
        <Button variant="contained" onClick={this.back} color="success">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={this.continue}
          style={{ marginLeft: "10px" }}
        >
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;

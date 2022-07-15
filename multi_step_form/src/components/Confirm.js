import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText } from "@mui/material";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar style={{ margin: "auto" }}>Confirm User Data</Toolbar>
        </AppBar>

        <br />
        <List>
          <ListItemText primary="First Name" secondary={firstName} />
          <ListItemText primary="Last Name" secondary={lastName} />
          <ListItemText primary="Email" secondary={email} />
          <ListItemText primary="Occupation" secondary={occupation} />
          <ListItemText primary="City" secondary={city} />
          <ListItemText primary="Bio" secondary={bio} />
        </List>
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
          Confirm & Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default Confirm;

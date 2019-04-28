import React, { Component, Fragment } from "react";

import axios from "axios";
import classes from './DonationsViewer.module.css';
import Donations from '../../components/Donations/Donations';

class DonationsViewer extends Component {
  state = {
    charityInfo: {},
    donations: [],
  };

  componentDidMount() {
    this.getCharityInfo();
    this.getDonations();
  }

  getCharityInfo = () => {
    axios
      .get("/charity/183092", {
        headers: {
          "Content-Type": "application/json"
        },
        data: {}
      })
      .then(response => this.setState({ charityInfo: response.data }))
      .catch(error => console.log(error));
  }

  getDonations = () => {
    axios
    .get("/charity/183092/donations", {
      headers: {
        "Content-Type": "application/json"
      },
      data: {}
    })
    .then(response => this.setState({ donations: response.data.donations }))
    .catch(error => console.log(error));
  }

  render() {
    const charityInfo = this.state.charityInfo;
    const donations = this.state.donations;
    let themeColour = [];
    if (charityInfo.themeColour) {
      themeColour = Object.values(charityInfo.themeColour);
      // Reorder the array so it's in the rgba format.
      [themeColour[0], themeColour[1], themeColour[2], themeColour[3]] = [themeColour[1], themeColour[2], themeColour[3], themeColour[0]];
    }
    return (
      <Fragment>
        <header className={classes.CharityInformation}>
          <img src={charityInfo.logoAbsoluteUrl} alt='BHF Logo' />
          <h2 style={{ color: `rgba(${themeColour}` }}>{charityInfo.name}</h2>
          <p>{charityInfo.description}</p>
        </header>
        <Donations donations={donations} />
      </Fragment>
    );
  }
}

export default DonationsViewer;

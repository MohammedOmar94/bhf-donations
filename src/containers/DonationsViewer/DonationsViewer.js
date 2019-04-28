import React, { Component } from "react";

import axios from "axios";
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
    return (
      <section>
        <img src={charityInfo.logoAbsoluteUrl} alt='BHF Logo' width='50' height='50' />
        <h2>{charityInfo.name}</h2>
        <p>{charityInfo.description}</p>
        <Donations donations={donations} />
      </section>
    );
  }
}

export default DonationsViewer;

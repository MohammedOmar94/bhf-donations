import React, { Component } from "react";

import axios from "axios";

class DonationsViewer extends Component {
  state = {
    charityInfo: {}
  };

  componentDidMount() {
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

  render() {
    const charityInfo = this.state.charityInfo;
    console.log(charityInfo);
    return (
      <section>
        <img src={charityInfo.logoAbsoluteUrl} alt='BHF Logo' width='50' height='50' />
        <h2>{charityInfo.name}</h2>
        <p>{charityInfo.description}</p>
      </section>
    );
  }
}

export default DonationsViewer;

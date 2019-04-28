import React from "react";
import PropTypes from "prop-types";

const donations = props => {
  const donationsList = props.donations.map((donation, index) => {
    const donationDate = new Date(parseInt(donation.donationDate.substr(6))).toLocaleDateString("en-GB");
    return (
      <section key={donation.donorDisplayName + index}>
        <p>{donationDate}</p>
        <img src={donation.imageUrl} alt="BHF User" width="50" height="50" />
        <p>
          <b>{donation.donorDisplayName}</b> donated{" "}
          <b>
            {donation.donorLocalAmount.toFixed(2)}{" "}
            {donation.donorLocalCurrencyCode}
          </b>
        </p>
        <p>{donation.message}</p>
      </section>
    );
  });
  return <article>{donationsList}</article>;
};

donations.propTypes = {
  donations: PropTypes.array
};

export default donations;

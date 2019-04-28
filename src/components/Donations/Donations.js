import React from "react";
import PropTypes from "prop-types";

import classes from './Donations.module.css';

const donations = props => {
  const donationsList = props.donations.map((donation, index) => {
    const donationDate = new Date(parseInt(donation.donationDate.substr(6))).toLocaleDateString("en-GB");
    return (
      <section key={donation.donorDisplayName + index} className={classes.Donation}>
        <img src={donation.imageUrl} alt="BHF User" />
        <section>
          <p>{donationDate}</p>
          <p className={classes.DonorName}>
            <b>{donation.donorDisplayName}</b> donated{" "}
            <b>
              {donation.donorLocalAmount.toFixed(2)}{" "}
              {donation.donorLocalCurrencyCode}
            </b>
          </p>
          <p>{donation.message}</p>
        </section>
      </section>
    );
  });
  return <article className={classes.Donations}>{donationsList}</article>;
};

donations.propTypes = {
  donations: PropTypes.array
};

export default donations;

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import ListSerie from './ListSerie';

export default function Information(props) {
  return (
    <div className="aboutHim">
      <img src={`${props.image}`} />

      <div className="information">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <ListSerie series={props.series} />
      </div>
    </div>
  );
}

Information.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
};

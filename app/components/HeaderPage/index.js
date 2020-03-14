import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class HeaderPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Marvel Page</title>
          <meta name="description" content="Home page of the site" />
        </Helmet>

        <div className="HeaderPage">
          <h1>Marvel</h1>

          <NavLink to="/">
            <Button variant="contained" color="primary">
              Home
            </Button>
          </NavLink>

          <NavLink to="/search">
            <Button variant="contained" color="primary">
              Search
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}

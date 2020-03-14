/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HeaderPage from 'components/HeaderPage';
import MainPage from 'containers/MainPage';
import SearchPerso from 'containers/SearchPerso';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AboutHim from 'containers/AboutHim';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <HeaderPage />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/search" component={SearchPerso} />
        <Route path="/abouthim/:id" component={AboutHim} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </div>
  );
}

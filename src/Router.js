import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Index from './views/index';
import NewPet from './views/new-pet';
import Pet from './views/pet';

const Router = () => (
  <Switch>
    <Route
      path="/"
      component={Index}
      exact
    />
    <Route
      path="/new-pet"
      component={NewPet}
      exact
    />
    <Route
      path="/pet/:id"
      component={Pet}
      exact
    />
  </Switch>
);

export default Router;

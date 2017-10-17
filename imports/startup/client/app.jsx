import { Meteor } from 'meteor/meteor';

import React from 'react';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';

import routes from '../../router/routes.js';
import MainLayout from '../../ui/containers/MainLayout.jsx';


const rootRoute = {
  component: MainLayout,
  childRoutes: routes,
};

Meteor.startup(() => {
  ReactDOM.render(
    <BrowserRouter history={browserHistory} routes={rootRoute} />,
    document.getElementById('app')
  );
});

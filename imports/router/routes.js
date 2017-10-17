import { browserHistory, Router, Route, Link, withRouter } from 'react-router';

import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../ui/containers/MainLayout.jsx';

import Home from '../ui/components/home.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout, {
      content: (<Home />)
    })
  }
});

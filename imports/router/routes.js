import { browserHistory, Router, Route, Link, withRouter } from 'react-router';

import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../ui/containers/MainLayout.jsx';

import Home from '../ui/components/home/home.jsx';
import Business from '../ui/components/business/business.jsx';

FlowRouter.route('/', {
  action(){
    mount(MainLayout, {
      content: (<Home />)
    })
  }
});

FlowRouter.route('/business', {
  action(){
    mount(MainLayout, {
      content: (<Business />)
    })
  }
});

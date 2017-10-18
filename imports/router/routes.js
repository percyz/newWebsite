import { browserHistory, Router, Route, Link, withRouter } from 'react-router';

import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from '../ui/containers/MainLayout.jsx';

import Home from '../ui/components/home/home.jsx';
import Business from '../ui/components/business/business.jsx';


/** Admin pages **/
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../ui/pages/admin.js';
import '../ui/pages/geia.js';
import '../ui/pages/admin/users.js';
import '../ui/pages/admin/list.js';

/** Start of admin **/

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin'
});

adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('Admin', {
      main: 'Admin',
      links: "Links",
      logo: "BetaLogo"
    });
  }
});

adminRoutes.route('/users', {
  action: function() {
    BlazeLayout.render('Users', {
      main: 'Users',
      links: "Links",
      logo: "BetaLogo"
    });
  }
});

adminRoutes.route('/list', {
  action: function() {
    BlazeLayout.render('List', {
      main: 'List',
      links: "Links",
      logo: "BetaLogo"
    });
  }
});

/** End of admin **/

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

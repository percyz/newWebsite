import { browserHistory, Router, Route, Link, withRouter } from 'react-router';

import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from '../ui/containers/MainLayout.jsx';

import Home from '../ui/components/home/home.jsx';
import Business from '../ui/components/business/business.jsx';
import AboutUs from '../ui/components/aboutUs/aboutUs.jsx';
import ContactUs from '../ui/components/contactUs/contactUs.jsx';
import TermsConditions from '../ui/components/termsConditions/termsConditions.jsx';
import Download from '../ui/components/download/download.jsx';

/** ResetPassword page **/
import ResetPassword from '../ui/components/forgotPw/forgot.jsx';


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

FlowRouter.route('/about', {
  action(){
    mount(MainLayout, {
      content: (<AboutUs />)
    })
  }
});

FlowRouter.route('/resetPassword', {
  action() {
    mount(MainLayout, {
      content: (<ResetPassword />)
    })
  }
});

FlowRouter.route('/contactus', {
  action(){
    mount(MainLayout, {
      content: (<ContactUs />)
    })
  }
});

FlowRouter.route('/termsconditions', {
  action(){
    mount(MainLayout, {
      content: (<TermsConditions />)
    })
  }
});

FlowRouter.route('/download', {
  action(){
    mount(MainLayout, {
      content: (<Download />)
    })
  }
});

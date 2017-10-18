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

FlowRouter.route('/aboutus', {
  action(){
    mount(MainLayout, {
      content: (<AboutUs />)
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

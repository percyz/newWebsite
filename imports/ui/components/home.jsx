import React from 'react';
import { Link } from 'react-router';


var highlightStyle = {"backgroundColor": "white","fontWeight":"bolder","fontSize":"120%"}

export default class Home extends React.Component {

    render() {

      return (
        <div className ="content" >
          <h1>This is home page!</h1>
        </div>
      );
    }
};

import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
  }
  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }
  componentWillMount(){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

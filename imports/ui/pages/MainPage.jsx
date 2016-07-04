import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
    this.logout = this.logout.bind(this);
  }
  componentWillMount(){
    Meteor.user();
  }
  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/login');
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = currentUser !== undefined;
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Auth App</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="text-center">{ loggedIn ? 'Welcome '+currentUser.username : '' }</h1>
        </div>
      </div>
    );
  }
}

MainPage.PropTypes = {
  username: React.PropTypes.string
}

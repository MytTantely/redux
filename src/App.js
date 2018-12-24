import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';

// import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value);
  }

  render() {

    // console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input onChange={this.onUpdateUser} />
          {this.props.userPlusProps}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  userPlusProps: `${state.user} ${props.aRandomProps}`
})

// const mapActionsToProps = (dispatch, props) => (
//   bindActionCreators(
//     {
//       onUpdateUser: updateUser
//     },
//     dispatch
//   )

// );

const mapActionsToProps = {
  onUpdateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App);

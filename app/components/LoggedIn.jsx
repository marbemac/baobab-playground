import React from 'react';
import mixins from 'baobab-react/mixins';
import State from '../state';

let LoggedIn = React.createClass({
  mixins: [mixins.branch],

  cursors: {
    session: ['currentSession']
  },

  render() {
    return (
      <div>
        <h1>LoggedIn</h1>
        <div>Logged in as {this.state.session.username}</div>
      </div>
    );
  }
})

export default LoggedIn;

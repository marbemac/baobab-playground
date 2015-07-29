import React from 'react';
import mixins from 'baobab-react/mixins';
import Login from './Login';

let App = React.createClass({
  mixins: [mixins.branch],

  cursors: {
    session: ['currentSession']
  },

  render() {
    return (
      <div>
        <h1>Hello world!</h1>

        {this.state.session.id ? <LoggedIn /> : <Login />}
      </div>
    );
  }
})

let AppContainer = React.createClass({
  mixins: [mixins.root],

  render() {
    return <App />;
  }
})

export default AppContainer;

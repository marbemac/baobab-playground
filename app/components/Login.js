import React from 'react';
import mixins from 'baobab-react/mixins';
import State from '../state';

let Login = React.createClass({
  mixins: [mixins.branch],

  cursors: {
    login: ['login'],
    session: ['currentSession']
  },

  changeInputValue(field, event) {
    State.set(['login', field], event.target.value)
  },

  handleSubmit(e) {
    e.preventDefault()

    if (this.state.login.username && this.state.login.password) {
      State.set('currentSession', {
        id: '123',
        username: this.state.login.username
      })
    } else {
      State.set(['currentSession', 'error'], 'Set a username and password!')
    }
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
        <h3>{this.state.session.error}</h3>
        <form onSubmit={this.onInputValueSubmit}>
          <input type="text" value={this.state.login.username} onChange={this.changeInputValue.bind(null, 'username')}/>
          <input type="text" value={this.state.login.password} onChange={this.changeInputValue.bind(null, 'password')}/>
        </form>
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
})

export default Login;

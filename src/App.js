import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Pages from './pages';

class App extends Component {
  state = {contacts: []};
  componentDidMount() {
    fetch('https://api.randomuser.me/?results=50')
    .then(res => res.json())
    .then(res => res.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        email: `${user.email}`,
        thumbnail: `${user.picture.thumbnail}`
      }
    )))
    .then(contacts => this.setState({contacts}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={ (props) => <Pages.Home {...props} contacts={this.state.contacts}/> } />
            <Route path='/context' exact component={Pages.Context}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:'',
      display: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    this.setState({display: false})
    event.preventDefault();
  }
  handleChange(val, event) {
    this.setState({[val]: event.target.value});
    event.preventDefault();
  }
  render() {
    return (
      <div>
        { this.state.display &&
          <div>
            <input name="email" type="email" onChange={(event) => this.handleChange('email', event)} />
            <input name="password" type="password" onChange={(event) => this.handleChange('password', event)} />
            <input type="button" value="Submit" onClick={this.handleSubmit}/>
          </div>
        }
      </div>
    )
  }
}

export default Login;

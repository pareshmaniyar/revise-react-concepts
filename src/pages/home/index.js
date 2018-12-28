import React from 'react';
import './index.css';
import Components from '../../components/index';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1><strong>Home</strong></h1>
        <div className="template-card">
          {this.props.contacts && this.props.contacts.map(contact => (
          <div className="template" key={contact.email}>
            <div className="col-sm-2">
              <img
                className="rounded-circle"
                src={contact.thumbnail}
                role="presentation"
              />
            </div>
            <div className="feedData col-sm-9">
              <strong>{contact.name}</strong>
              <br />
              <small>{contact.email}</small>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
  }
}

export default Components.Loading('contacts')(Home);

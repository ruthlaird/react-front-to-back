import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  //   deleteContact = id => {
  //     //use destructuring to get current contacts from state
  //     const { contacts } = this.state;

  //     //filter those contacts that aren't the current id
  //     const newContacts = contacts.filter(contact => contact.id !== id);

  //     //set state to the new contacts with the id removed
  //     this.setState({ contacts: newContacts });
  //   };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  // name={contact.name}
                  // email={contact.email}
                  // phone={contact.phone}
                  contact={contact}
                //   deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;

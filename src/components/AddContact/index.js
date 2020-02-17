import React, { Component } from "react";
import { Input } from '@material-ui/core';

class AddContact extends Component {

  state = {
    loading: false,
    name: "",
    email: ""
  }

  // https://graphql.org/graphql-js/mutations-and-input-types/
  fetchData = () => {
    const query = `
      mutation addContact($contact: InputContact) {
        addContact(contact: $contact) {
          id
          name
          email
        }
      }
    `

    const name = 'first last'
    const email = 'email@gmail.com'

    this.setState({ loading: true }, () => {
      console.log('fetching')
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          variables: {
            contact: {
              name,
              email
            }
          }
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
    })
  }


  render() {
    return (
      <div className="App">
          <h1>
            <Input placeholder='Contact Name' />
            <Input placeholder='Email' />
            <Input placeholder='Date Modified' />
            <Input placeholder='Date Created' /> */
          </h1>
      </div>
    );
  }
}

export default AddContact;


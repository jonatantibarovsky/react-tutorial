import React, { Component } from "react";
import { Input } from '@material-ui/core';

class AddContact extends Component {

  state = {
    loading: false,
    data: null
  }

  componentDidMount() {
    this.fetchData()
  }


  fetchData = () => {
    const query = `
      mutation addContact($contact: InputContact) {
        addContact(contact: $contact) {
          id
        }
      }
    `
    const name = 'first last'
    const email = 'email@gmail.com'

    this.setState({ loading: true }, () => {
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
      .then(res => {
        const result = res.json()
        .then(response => {
          this.setState({ data: response})
          console.log(this.state.data)
        })
      })
      .catch(error => console.log(error))
    })
  }


  render() {
    return (
      <div className="App">
          <h1>hi</h1>
          <Input placeholder='Contact Name' />
          <Input placeholder='Email' />
          <Input placeholder='Date Modified' />
          <Input placeholder='Date Created' />
      </div>
    );
  }
}

export default AddContact;

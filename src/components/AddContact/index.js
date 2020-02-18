import React, { Component } from "react";
import { Input, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

class AddContact extends Component {

  state = {
    loading: false,
    name: "",
    email: ""
  }

  // https://graphql.org/graphql-js/mutations-and-input-types/
  createContact = () => {
    const query = `
      mutation addContact($contact: InputContact) {
        addContact(contact: $contact) {
          id
          name
          email
        }
      }
    `
    const { name, email } = this.state

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

  handleChange = (event, value) => {
    console.log(event, value)
    if (value == 'name') {
      this.setState({
        name: event.target.value
      })
    } else if (value == 'email') {
      this.setState({
        email: event.target.value
      })
    }
  }


  render() {
    return (
      <div className="App">
        <form>
            <Input 
              placeholder='Contact Name' 
              onChange = {(e) => this.handleChange(e, 'name')}
            />
            <Input 
              placeholder='Email' 
              onChange = {(e) => this.handleChange(e, 'email')}
            />
        </form>
        <Link to>
          <Button onClick = {this.createContact}>
            Click me
          </Button>
        </Link>
        
      </div>
    );
  }
}

export default AddContact;


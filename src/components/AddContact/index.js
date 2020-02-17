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

  handleChange = (event, a) => {
    console.log(event, a)
    this.setState({
      value: event.target.value
    })
    console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        <form>
            <Input 
              placeholder='Contact Name' 
              onChange = {(e) => this.handleChange(e, 'asd')}
            />
            <Input 
              placeholder='Email' 
              onChange = {this.handleChange}
            />
            <Input 
              placeholder='Date Modified' 
            />
            <Input 
              placeholder='Date Created' 
            /> 
        </form>
      </div>
    );
  }
}

export default AddContact;


import React, { Component } from "react";
import ListContacts from '../ListContacts'

class EditContact extends Component {
  state = {
    loading: false,
    name: "",
    email: ""
  }

  componentDidMount() {
    this.fetchData()
  }

  // https://graphql.org/graphql-js/mutations-and-input-types/
  updateContact = () => {
    const query = `
      mutation updateContact($contact: InputContact) {
        updateContact(contact: $contact) {
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

  fetchData = () => {
    const query = `
      query {
        contacts {
          id
          name
          email
        }
      }
    `
      //
    this.setState({ loading: true }, () => {
      fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      })
      .then(res => {
        const result = res.json()
        .then(response => {
          this.setState({ data: response.data.contacts})
        })
      })
      .catch(error => console.log(error))
    })
  }


  render() {
    return (
      <div className="App">
        <ListContacts />
      </div>
    );
  }
}


export default EditContact;

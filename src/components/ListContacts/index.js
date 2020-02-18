import React, { Component } from "react";

require('isomorphic-fetch')

class ListContacts extends Component {

  state = {
    loading: false,
    data: []
  }

  componentDidMount() {
    this.fetchData()
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
        
          this.setState({ data: response.contacts})
          console.log(this.state.data)
        })
      })
      .catch(error => console.log(error))
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map(contact => {
          return <h1>contact.name</h1>
        })}
      </div>
    );
  }
}

export default ListContacts;

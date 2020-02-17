import React, { Component } from "react";

require('isomorphic-fetch')

class ListContacts extends Component {

  state = {
    loading: false,
    data: null
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
        list contacts
      </div>
    );
  }
}

export default ListContacts;

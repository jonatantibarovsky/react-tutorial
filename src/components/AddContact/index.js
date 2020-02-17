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
    this.setState({ loading: true }, () => {
      fetch('http://localhost:3001/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: `{
            contact {
              id
              name
              email
            }
          }`
        })
      })
      .then(response => response.json())
      .then(response => console.log())

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

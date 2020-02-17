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
    this.setState({ loading: true }, () => {
      fetch('http://localhost:3001/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        res.json()
        console.log(res)
      })
      .catch(error => console.log(error))
    })
  }

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
      </div>
    );
  }
}

export default ListContacts;

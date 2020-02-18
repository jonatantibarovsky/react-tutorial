import React, { Component } from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Contact = styled.div`
  display: flex;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: lightblue;
  color: white;
  border: 2px solid white;
`

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
        {this.state.data && this.state.data.map((contact) => {
          return <Link to={`/contact/${contact.id}`}><Contact key={contact.id}>{contact.name} {contact.email}</Contact></Link>
        })}
      </div>
    );
  }
}

export default ListContacts;

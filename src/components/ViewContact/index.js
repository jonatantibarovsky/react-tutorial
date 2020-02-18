import React, { Component, useState, useEffect } from "react";
import styled from 'styled-components'

const Contact = styled.div`
  display: flex;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: lightblue;
  color: white;
  border: 2px solid white;
  min-height: 40px;
`

class ViewContact extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: {}
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const query = `
      query contact($id: ID) {
        contact(id: $id) {
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
          body: JSON.stringify({
             query,
             variables: {
               id: this.props.id
             }
          })
        })
        .then(res => {
          const result = res.json()
          .then(response => {
            this.setState({
              data: response.data.contact
            })
            //console.log(this.state.data)
          })
        })
        .catch(error => console.log(error))
      })
  }
  
  render() {
    return(
      <div>
        <Contact>
          {this.state.data.name}
          {this.state.data.email}
        </Contact>
      </div>
    )
  }
}

export default ViewContact;

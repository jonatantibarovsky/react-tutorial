import React, { Component } from "react";
import { Input, Button } from '@material-ui/core'
import styled from 'styled-components'
import { withRouter } from "react-router";


const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  margin:0 auto;
  width:30%;
`

const Success = styled.div`

`

const Failure = styled.div`

`

class EditContact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      name: '',
      email: '',
      success: null,
      failure: null
    }
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
        .then(data => {
          console.log(data)
          this.setState({ success: true })
        })
        .catch(error => {
          console.log(error)
          this.setState({ failure: true, error })
        })
    })
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
          res.json()
            .then(response => {
              /* this.setState({
                name: response.data.contact.name,
                email: response.data.contact.email
              }) */
              //console.log(this.state.data)
            })
        })
        .catch(error => console.log(error))
    })
  }

  render() {
    const { success, failure } = this.state
    console.log(this.props)
    // call graphql to fetch based on 
    return (
      <Div>
        <Input value={this.state.name} />
        <Input value={this.state.email} />
        <Button onClick={this.updateContact}>
          Update Contact
        </Button>
        {
          success && <Success>Contact successfully updated.</Success>
        }
        {
          failure && <Failure>${this.state.error}</Failure>
        }
      </Div>
    );
  }
}


export default withRouter(EditContact);

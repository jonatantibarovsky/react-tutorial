import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router";


function ViewContact() {
  const { id } = useParams()
  console.log(id)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  /* useEffect(() => {
    const query = `
      query {
        contacts(id: ${id}) {
          name
          email
        }
      }
    `
    setLoading(true)

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
        setData(response)
        console.log(data)
      })
    })
    .catch(error => console.log(error))
  }, []) */

    return (
      <div className="App">
      view contact
      </div>
    )
  
}

export default ViewContact;

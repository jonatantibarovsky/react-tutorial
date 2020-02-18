import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router";


function ViewContact() {
  const { id } = useParams()
  console.log(id)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    const query = `
      query contact($id: ID) {
        contact(id: $id) {
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
        body: JSON.stringify({
          query,
          variables: {
            id: id
          }
        })
    })
    .then(res => {
      const result = res.json()
      .then(response => {
        // setData doesnt do what it needs to do
        setData(response.data.data)
        // prints {}
        console.log(data)
      })
    })
    .catch(error => console.log(error))
  }, []) 

    return (
      <div className="App">
        hi
      </div>
    )
  
}

export default ViewContact;

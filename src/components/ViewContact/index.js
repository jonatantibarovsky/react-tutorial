import React, { Component } from "react";
import { useParams } from "react-router";

function ViewContact() {
  const { id } = useParams() 
  console.log(id)
  return (
    <div className="App">
    </div>
  );
}

export default ViewContact;

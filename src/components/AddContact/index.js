import React, { Component } from "react";
import { Input } from '@material-ui/core';

class AddContact extends Component {
  render() {
    return (
      <div className="App">
          <Input placeholder='Contact Name' />
          <Input placeholder='Email' />
          <Input placeholder='Date Modified' />
          <Input placeholder='Date Created' />
      </div>
    );
  }
}

export default AddContact;

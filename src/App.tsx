import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListContacts from './components/ListContacts';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';
import ViewContacts from './components/ViewContact';
import DeleteContact from './components/DeleteContact';
import GetID from './components/containers/GetID'
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = {
    feature: 'list'
  };
  render() {
    const { feature } = this.state
    return (
      /*
  <Button variant="contained" color="primary" onClick={() => this.setState({feature:'list'})}>List Contacts</Button>
  {
    feature == 'list' && <ListContacts />
  }
  <Button variant="contained" color="primary" onClick={() => this.setState({feature:'view'})}>View Contacts</Button>
  {
    feature == 'view' && <ViewContacts />
  }
  {
    feature == 'add' && <AddContact />
  }
  <Button variant="contained" color="primary" onClick={() => this.setState({feature:'delete'})}>Delete Contact</Button>
  {
    feature == 'delete' && <DeleteContact />
  }
  <Button variant="contained" color="primary" onClick={() => this.setState({feature:'edit'})}>Edit Contact</Button>
  {
    feature == 'edit' && <EditContact />
  }
  /
  */

      <Router>
        <div>
          <nav>
            <ul>
              <Button variant="outlined" color="primary">
                <Link to="/contact/all">List Contacts</Link>
              </Button>
              <Button variant="outlined" color="primary">
                <Link to="/contact/add">Add Contact</Link>
              </Button>
              <Button variant="outlined" color="primary">
                <Link to="/contact/delete">Delete Contact</Link>
              </Button>
              <Button variant="outlined" color="primary">
                <Link to="/contact/edit">Edit Contact</Link>
              </Button>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/contact/all">
              <ListContacts />
            </Route>
            <Route path="/contact/edit">
            <GetID value='edit'/>
            </Route>
            <Route path="/contact/delete">
              <DeleteContact />
            </Route>
            <Route path="/contact/add">
              <AddContact />
            </Route>
            // /:id part recognized every string after the /
            <Route path="/contact/:id">
              <GetID value='id'/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import CreateBlog from "./components/Create";
import Home from "./Home";
import ActivePost from "./components/ActivePost";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };
  }

  render(props) {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />

            <Route path="/create" component={CreateBlog} />
            <Route path="/blog/:id" component={ActivePost} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

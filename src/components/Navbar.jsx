import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          Blogger
        </Link>
      </nav>
    );
  }
}
export default Navbar;

import Axios from "axios";
import React from "react";
import { Redirect, BrowserRouter as Router } from "react-router-dom";

class CreateBlog extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      redirect: false,
    };
  }
  handleSubmit = () => {
    if (this.state.title == null || this.state.description == null) {
      return;
    }
    Axios.post("http://127.0.0.1:8000/api/blog/create/", {
      title: this.state.title,
      description: this.state.description,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          title: "",
          description: "",
          redirect: true,
        });
      })
      .catch((err) => console.log(err));
  };
  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  handleDesc = (e) => {
    this.setState({ description: e.target.value });
  };
  render() {
    return (
      <Router>
        {this.state.redirect ? (
          <Redirect to="/home" />
        ) : (
          <div className="container" style={{ maxWidth: "60%" }}>
            <div className="card my-3 py-4">
              <div className="h3 text-center bg-">Create a post</div>
              <hr />
              <form
                action="#"
                className="px-4 py-3"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  className="form-control "
                  placeholder="Title"
                  onChange={this.handleTitle}
                  value={this.state.title}
                />
                <hr />
                <textarea
                  rows="20"
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={this.handleDesc}
                  value={this.state.description}
                />
                <input
                  type="submit"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
            </div>
          </div>
        )}
      </Router>
    );
  }
}
export default CreateBlog;

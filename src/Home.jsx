import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Post from "./components/Post";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: [],
      activePost: [],
    };
  }
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => this.setState({ blogList: res.data }))
      .catch((err) => console.log(err));
  };
  setActivePost = (data) => {
    this.setState({ activePost: data });

    // if (this.state.activePost !== []) {
    //   console.log(this.state.activePost);
    // } else {
    //   console.log("Fetching Data");
    // }
  };

  render(props) {
    return (
      <div className="container p-3">
        <Link to="/create" className="btn btn-info btn-block my-2">
          Post a Blog
        </Link>
        <div className="card">
          <div className="card-body">
            <div className="card-title h2 text-center text-primary">Blogs</div>
            <hr />
            <div
              className="blog-posts"
              style={
                {
                  // display: "grid",
                  // gridTemplateColumns: "50% 50%",
                  // gridAutoRows: "minmax(min-content, max-content)",
                  // columnCount: "2",
                }
              }
            >
              {this.state.blogList.map((post) => (
                <Post
                  data={post}
                  key={post.id}
                  setActive={this.setActivePost}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

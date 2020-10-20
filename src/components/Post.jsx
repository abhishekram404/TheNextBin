import React from "react";

import "./Post.css";
import { Link } from "react-router-dom";

class Post extends React.Component {
  render() {
    return (
      <div
        className="post card mt-2 mx-1 pb-1"
        // style={{
        //   display: "inline-block",
        //   maxWidth: "350px",
        //   minWidth: "350px",
        // }}
      >
        <div className="card-body">
          <div className="card-title h5" style={{ fontFamily: "Montserrat" }}>
            {this.props.data.title}
          </div>
          <div
            className="card-text text-secondary"
            style={{
              whiteSpace: "no-wrap",
              fontFamily: '"Noto Sans JP", sans-serif',
            }}
          >
            {this.props.data.description}
          </div>
          <Link
            to={`/blog/${this.props.data.id}`}
            className="btn btn-sm btn-outline-primary float-right mt-4"
          >
            Read More
          </Link>
        </div>
      </div>
    );
  }
}

export default Post;

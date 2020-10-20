import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Axios from "axios";
function ActivePost({ match }) {
  const [active, setActive] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [oldTitle, setOldTitle] = useState("");
  const [oldDesc, setOldDesc] = useState("");
  const [redirect, setRedirect] = useState(false);
  const refresh = () => {
    Axios.get(`http://127.0.0.1:8000/api${match.url}`)
      .then((res) => {
        setActive(res.data);
        setOldTitle(res.data.title);
        setOldDesc(res.data.description);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refresh();
    // setOldData(active.description);
  }, [1]);
  const handleSubmit = () => {
    Axios.post(`http://127.0.0.1:8000/api/blog/update/${match.params.id}`, {
      title: oldTitle,
      description: oldDesc,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleDescChange = (e) => {
    setOldDesc(e.target.value);
  };
  const handleTitleChange = (e) => {
    setOldTitle(e.target.value);
  };
  console.log(oldDesc);
  const handleDelete = () => {
    Axios.delete(`http://127.0.0.1:8000/api/blog/delete/${match.params.id}`)
      .then((res) => console.log(res))
      .then(() => setRedirect(true))
      .catch((err) => console.log(err));
  };
  return (
    <Router>
      {redirect ? (
        <Redirect to="/home" />
      ) : (
        <div className="container">
          <div className="card my-3 px-4 pb-4">
            <div className="card-body">
              {editMode ? (
                <input
                  className="form-control"
                  value={oldTitle}
                  onChange={handleTitleChange}
                />
              ) : (
                <div
                  className="card-title h4"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {active.title}
                </div>
              )}
              <hr />
              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <textarea
                    name=""
                    id=""
                    rows="30"
                    className="form-control "
                    value={oldDesc}
                    onChange={handleDescChange}
                  ></textarea>
                  <input
                    type="button"
                    value="Cancel"
                    className="btn btn-danger btn-block mt-3"
                    onClick={() => {
                      setEditMode(false);
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-success btn-block mt-3"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <div
                  className="card-text text-secondary "
                  style={{
                    whiteSpace: "no-wrap",
                    fontFamily: '"Noto Sans JP", sans-serif',
                  }}
                >
                  {active.description}
                </div>
              )}
            </div>
            {editMode ? null : (
              <>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  Edit this Blog
                </button>
                <button className="btn btn-danger mt-3" onClick={handleDelete}>
                  Delete this Blog
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Router>
  );
}

export default ActivePost;

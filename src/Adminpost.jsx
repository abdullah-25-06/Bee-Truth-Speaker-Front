import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import { toast } from "react-toastify";

function Adminpost() {
  const title = useRef("");
  let platform = "";
  const url = useRef("");
  const selectHandler = (e) => {
    platform = e.target.value;
  };
  const FormSubmission = async (e) => {
    e.preventDefault();
    if (!platform || !title || !url) return toast.warning(`Please Select Values`, {
      autoClose: 3000
    });
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/add-${platform}-post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            auth_token: localStorage.getItem("tokenss")
              ? `Bearer ${localStorage.getItem("tokenss")}`
              : null,
          },
          body: JSON.stringify({
            title: title.current.value,
            post: url.current.value,
            platform: url.current.value
          }),
        }
      );
      const data = await res.json();
      toast.success(`Post Added Successfully`, {
        autoClose: 3000
      });
      title.current.value = ""
    } 
    catch (error) {
      toast.success(`Something went wrong due to ${error}`, {
        autoClose: 3000
      });

    }
  };
  return (
    <>
      <div className="add">
        <form onSubmit={FormSubmission} className="col-md-4 mx-auto addform">
          <div className="addhead">
            <h3>Admin posting panel</h3>
            <NavLink className="nav-link" to="/Dashboard">
              <h6>dashboard</h6>
            </NavLink>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Title of your post
            </label>
            <input
              ref={title}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your title"
            ></input>
          </div>
          <div class="input-group mb-3">
            <select
              onChange={selectHandler}
              id="select"
              class="form-select"
              aria-label="Default select example"
              defaultValue="insta"
            >
              <option value="insta">Instagram</option>
              <option value="twitter">X(Twitter)</option>
              <option value="facebook">Facebook</option>
              <option value="tiktok">Tiktok</option>
            </select>
          </div>
          <input
            ref={url}
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Enter the Url of the post"
          ></input>
          <button type="submit" class="btn btn-primary mt-3">
            Add post
          </button>
        </form>
      </div>
    </>
  );
}

export default Adminpost;

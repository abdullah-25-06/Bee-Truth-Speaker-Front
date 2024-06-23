import React, { useEffect, useState } from "react";
import ZPanel from "./ZPanel";
import { toast } from 'react-toastify';

function Userposts() {
  const [posts, setPosts] = useState([]);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    async function call() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/admin/all-post", {
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("tokenss")
              ? `Bearer ${localStorage.getItem("tokenss")}`
              : null,
          },
        });
        const data = await res.json();
        setPosts(data.data);
      } catch (err) {
        toast.error(`Something went wrong due to ${err}`, {
          autoClose: 3000
        });

      }
    }
    call();
    return () => { };
  }, []);
  const handleAction = async (postId, action, notify) => {
    const p_id = posts[postId]?._id;
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/admin/action/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("tokenss")
            ? `Bearer ${localStorage.getItem("tokenss")}`
            : null,
        },
        body: JSON.stringify({ action, id: p_id }),
      });

      const data = await res.json();
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== data.id));

      if (notify) {
        toast.success('Post Approved', {
          autoClose: 3000
        });
      }
      else {
        toast.error('Post Rejected', {
          autoClose: 3000
        });
      }
    }
    catch (err) {
      toast.error(`Something went wrong due to ${err}`, {
        autoClose: 3000
      });
    }
  };
  const data = posts?.map((data, index) => {
    return (
      <tr key={index}>
        <td colSpan="1" className="change" id="colborder">
          <p>{index + 1}</p>
        </td>
        <td colSpan="1" id="colborder">
          <p>{data.title}</p>
        </td>
        <td colSpan="1" id="colborder">
          <p>{data.platform}</p>
        </td>
        <td colSpan="1" id="colborder">
          <a href={data.post}>link</a>
        </td>
        <td colSpan="1" id="lastcol">
          <button
            class="btn btn-primary mt-2"
            id={index}
            onClick={() => handleAction(index, "approved", true)}
          >
            Approve
          </button>
          <button
            class="btn btn-danger mt-2"
            id={index}
            onClick={() => handleAction(index, "delete")}
          >
            Reject
          </button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <div className="dashboardx">
        <div className="dbodyx">
          <ZPanel />
          <div className="reqformx">
            <div className="btnhead mt-1">
              <span>
                <a
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <img src="ham.png" id="sham" alt="" />
                </a>
              </span>
            </div>

            <div className="text-center col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-2 mainreqx">
              <div className="mt-2 backshadow">
                <div class="header">
                  <h2>User Posts</h2>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" id="colborder">
                        <p>#</p>{" "}
                      </th>
                      <th scope="col" id="colborder">
                        <p>Title</p>{" "}
                      </th>
                      <th scope="col" id="colborder">
                        <p>Platform</p>
                      </th>
                      <th scope="col" id="colborder">
                        <p>Url</p>
                      </th>
                      <th scope="col" id="colborder">
                        <p>Action</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{data}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userposts;

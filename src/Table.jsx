import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Table(props) {
  const [platform, setPlatform] = useState(props.name || "insta");
  const [Data_Array, setDataArray] = useState();

  useEffect(() => {
    async function call() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/v1/get-${platform}-posts`,
          {
            headers: {
              "Content-Type": "application/json",
              auth_token: localStorage.getItem("tokenss")
                ? `Bearer ${localStorage.getItem("tokenss")}`
                : null,
            },
          }
        );
        const data = await res.json();
        setDataArray(data.approvedFacePost);
      } catch (err) {
        toast.error(`Something went wrong..!!`, {
          autoClose: 3000
        });
      }
    }
    call();
    return () => {};
  }, []);

  const handleAction = async (postId) => {
    const p_id = Data_Array[postId]?._id;
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/v1/delete-${platform}-post/${p_id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            auth_token: localStorage.getItem("tokenss")
              ? `Bearer ${localStorage.getItem("tokenss")}`
              : null,
          },
          body: JSON.stringify({ id: p_id }),
        }
      );
      const data = await res.json();
      // console.log(data);
      toast.success(`Post Deleted Successfully`, {
        autoClose: 3000
      });
      setDataArray((prevPosts) =>
        prevPosts.filter((post) => post._id !== data.id)
      );
    } catch (err) {
      toast.error(`${err}`, {
        autoClose: 3000
      });
      // console.log(err);
    }
  };
  const data = Data_Array?.map((data, index) => {
    return (
      <>
        <tr key={index}>
          <td colSpan="1" id="colborder">
            <p>{index + 1}</p>
          </td>
          <td colSpan="1" id="colborder">
            {/* <p>{data.title}</p> */}
            <a href={data.post} target="_blank" className="table_title">
              {data.title}
            </a>
          </td>

          {/* <td colSpan="1" id="colborder">
            <a href={data.post} target="_blank">
              link
            </a>
          </td> */}
          <td colSpan="1" id="lastcol">
            <button
              class="btn btn-danger mt-2"
              id={index}
              onClick={() => handleAction(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <table className="table mt-1 ">
        <thead>
          <tr>
            <th scope="col" id="colborder">
              <p>S.no</p>
            </th>
            <th scope="col" id="colborder">
              <p>Title</p>
            </th>

            {/* <th scope="col" id="colborder">
              <p>Url</p>
            </th> */}
            <th scope="col" id="colborder">
              <p>Action</p>
            </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>

      <div className="paginationdiv">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item " aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Table;

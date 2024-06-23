import React, { useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";


function Login() {
  const navigate = useNavigate()
  const email = useRef("");
  const password = useRef("");

  // const [email, setEmail] = useState("");
  // // const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("tokenss")) {
      navigate("/Dashboard", { replace: true });
    }
  }, [navigate]);

  const btnHandler = async (e) => {
    e.preventDefault()
    const em = email.current.value;
    const pass = password.current.value;
    if (!em || !pass) return toast.warning('Please enter email and password', {
      autoClose: 3000
    });;
    try {
      const response = await fetch("http://localhost:8000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });
      const data = await response.json()
      localStorage.setItem("IsLoggedIn", 1)
      localStorage.setItem("tokenss", data.token)
      toast.success(`Welcome ${data.user.name}`, {
        autoClose: 3000
      });
      navigate('/Dashboard')
    } catch (error) {
      toast.error('Unauthorized', {
        autoClose: 3000
      });
      console.log(error);
    }
  };


  // const URL = "http://localhost:8000/api/v1"
  // const btnHandler = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Credentials": true,
  //     },
  //   };
  //   // `${URL}/api/v1/login`,
  //   try {
  //     const data  = await axios.post(
  //       `${URL}/login`,
  //       { email, password },
  //       config
  //     );
  //     console.log("data",data)
  //     // cookie.set("token", data.token)
  //     localStorage.setItem("tokenss", data.token);
  //     // console.log(data)
  //     // console.log(data.token)
  //     navigate("/dashboard", { replace: true });
  //     toast.success(`Welcome ${email}`, {
  //       toastId: "success",
  //       autoClose: 4000,
  //     });
  //   } catch (error) {
  //     console.log(error)
  //     // setPassword("")
  //     toast.error("Something went wrong. Please try again", {
  //       toastId: "error",
  //       autoClose: 4000,
  //     });
  //   }
  // };
  return (
    <>
      <div className="add ">
        <form className="col-md-3 mx-auto addform" onSubmit={btnHandler}>
          <div className="addhead">
            <h3>Login</h3>
          </div>
          <div class="mb-1">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              ref={email}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your email"
            ></input>
          </div>
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            ref={password}
            type="password"
            class="form-control"
            aria-label="Text input with dropdown button"
            placeholder="Enter your password"
          ></input>
          <button type="submit" class="btn btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Togglebtn from "./Togglebtn";
import {
  FacebookEmbed,
  InstagramEmbed,
  TikTokEmbed,
  TwitterEmbed,
} from "react-social-media-embed";
import { Instagram } from "reactjs-social-embed";
import Dropdown from "./Dropdown";
import { toast } from 'react-toastify';


function Display() {
  const [platform, setPlatform] = useState(null);
  const [change, setChange] = useState(true);
  const [data, setData] = useState("tiktok");
  const [fb, setFb] = useState();
  const [insta, setInsta] = useState();
  const [twitter, setTwitter] = useState();
  const [tiktok, setTiktok] = useState();

  useEffect(() => {
    async function callBack() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/all-post");
        const { data } = await response.json();
        setData(data[3].insta[0].post);
      } catch (error) {
        toast.success(`Something went wrong due to ${error}`, {
          autoClose: 3000
        });
      }
    }
    callBack();
  }, []);
  useEffect(() => {
    async function callBack() {
      try {
        console.log(insta[0]._id);
        const response = await fetch(
          `http://127.0.0.1:8000/api/v1/get-insta-post/${insta[0]._id}`
        );
        const data = await response.json();
        setData(data.instagram.post);
      } catch (err) {
        toast.success(`Something went wrong due to ${err}`, {
          autoClose: 3000
        });
      }
    }
    callBack();
  }, [platform]);
  useEffect(() => {
    let index;
    if (
      localStorage.getItem(platform) &&
      Number(localStorage.getItem(platform)) < platform?.length
    ) {
      index = Number(localStorage.getItem(platform));
    } else {
      localStorage.setItem(platform, 0);
      index = 0;
    }
    if (platform === "fb") {
      if (fb && fb.length >= 1) {
        if (index < fb.length) {
          setData(fb && fb.length >= 1 ? fb[index].post : "");
          localStorage.setItem(platform, index + 1);
        } else {
          setData(fb && fb.length >= 1 ? fb[0].post : "");
          localStorage.setItem(platform, 0);
        }
      }
    } else if (platform === "tiktok") {
      if (tiktok && tiktok.length >= 1)
        if (index < tiktok.length - 1) {
          setData(tiktok && tiktok.length >= 1 ? tiktok[index].post : "");
          localStorage.setItem(platform, index + 1);
        } else {
          setData(tiktok && tiktok.length >= 1 ? tiktok[0].post : "");
          localStorage.setItem(platform, 0);
        }
    } else if (platform === "twitter") {
      if (twitter && twitter.length >= 1)
        if (index < twitter.length) {
          setData(twitter && twitter.length >= 1 ? twitter[index].post : "");
          localStorage.setItem(platform, index);
        } else {
          setData(twitter && twitter.length >= 1 ? twitter[0].post : "");
          localStorage.setItem(platform, 0);
        }
    } else {
      if (insta && insta.length >= 1)
        if (index < insta.length) {
          setData(insta && insta.length >= 1 ? insta[index].post : "");
          localStorage.setItem(platform, index);
        } else {
          setData(insta && insta.length >= 1 ? insta[0].post : "");
          localStorage.setItem(platform, 0);
        }
    }
    return () => { };
  }, [platform, change]);
  return (
    <>
      <div className="dmain">
        <div className="dbox col-xxl-4 col-xl-5 col-lg-5 col-md-10 col-sm-9 mx-auto">
          <div className="top">
            <div className="timg">
              <img src="bee.png" alt="" />
            </div>
            <Dropdown />

            <Togglebtn />
          </div>
          <div className="socialmedia mt-2">
            <NavLink href="">
              <div className="mbox">
                <div
                  className="iconbox"
                  id="navli"
                  tabindex="1"
                  onClick={() => setPlatform("twitter")}
                >
                  <img src="tw.png" alt="" />
                </div>
              </div>
            </NavLink>
            <div className="line"></div>
            <NavLink href="">
              <div className="mbox">
                <div
                  className="iconbox"
                  tabindex="1"
                  onClick={() => setPlatform("insta")}
                >
                  <img src="insta2.png" id="insta" alt="" />
                </div>
              </div>
            </NavLink>
            <div className="line"></div>
            <NavLink href="">
              <div className="mbox">
                <div
                  className="iconbox"
                  tabindex="1"
                  onClick={() => setPlatform("tiktok")}
                >
                  <img src="tiktok.png" alt="" />
                </div>
              </div>
            </NavLink>
            <div className="line"></div>
            <NavLink href="">
              <div className="mbox">
                <div
                  className="iconbox"
                  tabindex="1"
                  onClick={() => setPlatform("fb")}
                >
                  <img src="fb.png" alt="" />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="dbody mt-2">
            <div className="bodybtns">
              <button className="dbtn">
                <img src="chat2.png" alt="" />
                <p className="mt-2">Reply on a post</p>
              </button>
              <button className="dbtn2">
                <div id="dbtn2img"></div>
                <p>Auto Pilot</p>
              </button>
            </div>
            <div className="mpost">
              <div className="post">
                <div style={{ display: "flex", justifyContent: "center" }}>
                </div>

              </div>
              <div className="bodybtns">
                <button className="dbtn">
                  <img src="chat2.png" alt="" />
                  <p className="mt-2">Reply on a post</p>
                </button>
                <button
                  className="dbtn2"
                  onClick={() => setChange((data) => !data)}
                >
                  <div id="dbtn3img"></div>
                  <p>New Post</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;

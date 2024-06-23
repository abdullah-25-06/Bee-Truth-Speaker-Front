import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Togglebtn from "./Togglebtn";
import {
  FacebookEmbed,
  InstagramEmbed,
  TikTokEmbed,
  TwitterEmbed,
} from "react-social-media-embed";
import Dropdown from "./Dropdown";

function Display() {
  const [platform, setPlatform] = useState(null);
  const [data, setData] = useState();
  const [fb, setFb] = useState();
  const [insta, setInsta] = useState();
  const [twitter, setTwitter] = useState();
  const [tiktok, setTiktok] = useState();
  const [fbIndex, setFbIndex] = useState(0);
  const [instaIndex, setInstaIndex] = useState(0);
  const [twitterIndex, setTwitterIndex] = useState(0);
  const [tiktokIndex, setTiktokIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/v1/all-post");
        const {
          data: [{ fb }, { twitter }, { tiktok }, { insta }],
        } = await response.json();
        setFb(fb);
        setInsta(insta);
        setTiktok(tiktok);
        setTwitter(twitter);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  const btnHandler = () => {
    console.log("insta data ", insta);
    if (platform === "fb") {
      if (fbIndex < fb.length - 1) {
        setFbIndex((prev) => prev + 1);
      } else {
        setFbIndex(0);
      }
      setData(fb[fbIndex + 1]?.post);
    } else if (platform === "insta") {
      if (instaIndex < insta.length - 1) {
        setInstaIndex((prev) => prev + 1);
      } else {
        setInstaIndex(0);
      }
      setData(insta[instaIndex + 1]?.post);
      console.log("insta index =", instaIndex);
    } else if (platform === "twitter") {
      if (twitterIndex < twitter.length - 1) {
        setTwitterIndex((prev) => prev + 1);
      } else {
        setTwitterIndex(0);
      }
      setData(twitter[twitterIndex + 1]?.post);
    } else if (platform === "tiktok") {
      if (tiktokIndex < tiktok.length - 1) {
        setTiktokIndex((prev) => prev + 1);
      } else {
        setTiktokIndex(0);
      }
      setData(tiktok[tiktokIndex + 1]?.post);
    }
  };

  useEffect(() => {
    if (platform === "fb") setData(fb[fbIndex]?.post);
    if (platform === "insta") {
      console.log("insta", insta[instaIndex]?.post);
      setData(insta[instaIndex]?.post);
    }
    if (platform === "twitter") setData(twitter[twitterIndex]?.post);
    if (platform === "tiktok") setData(tiktok[tiktokIndex]?.post);
  }, [platform, fbIndex, instaIndex, twitterIndex, tiktokIndex]);

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
              <a
                href={data ? data : ""}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <button className="dbtn">
                  <img src="chat2.png" alt="" />
                  <p className="mt-2">Reply on a post</p>
                </button>
              </a>
              <button className="dbtn2">
                <div id="dbtn2img"></div>
                <p>Auto Pilot</p>
              </button>
            </div>
            <div className="mpost" key={data}>
              {console.log("data", data)}
              {platform === "insta" && data && (
                <InstagramEmbed url={data} width={490} height={795} />
              )}
              {platform === "twitter" && data && (
                <TwitterEmbed url={data} width={500} height={500} />
              )}
              {platform === "fb" && data && (
                <FacebookEmbed url={data} width={400} height={520} />
              )}
              {platform === "tiktok" && data && (
                <TikTokEmbed url={data} width={490} height={520} />
              )}
            </div>
          </div>
          <div className="bodybtns">
            <button className="dbtn">
              <img src="chat2.png" alt="" />
              <p className="mt-2">Reply on a post</p>
            </button>
            <button className="dbtn2" onClick={btnHandler}>
              <div id="dbtn3img"></div>
              <p>New Post</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;

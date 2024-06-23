import React from 'react'
import { NavLink } from 'react-router-dom'
import Togglebtn from './Togglebtn'
import Dropdown from './Dropdown'

function Report() {
    return (
        <>
            <div className="dmain">
                <div className="dbox col-md-4 mx-auto">
                    <div className="top"> 
                        <div className="timg">
                            <img src="bee.png" alt="" />
                        </div>
                        <Dropdown/>
                        <Togglebtn/>
                    </div>
                    <div className="socialmedia mt-2">
                        <NavLink href="">
                            <div className="mbox" >
                                <div className="iconbox" id='navli' tabindex="1" >
                                    <img src="tw.png"  alt="" />
                                </div>
                            </div>
                        </NavLink>
                        <div className="line"></div>
                        <NavLink href="">

                            <div className="mbox">
                                <div className="iconbox"  tabindex="1">
                                    <img src="insta2.png"  id='insta'alt="" />
                                </div>

                            </div>
                        </NavLink>
                        <div className="line"></div>
                        <NavLink href="">

                            <div className="mbox">
                                <div className="iconbox"  tabindex="1">
                                    <img src="tiktok.png" alt="" />
                                </div>


                            </div>
                        </NavLink>
                        <div className="line"></div>
                        <NavLink href="">

                            <div className="mbox">
                                <div className="iconbox"  tabindex="1">
                                    <img src="fb.png" alt="" />
                                </div>

                            </div>
                        </NavLink>
                    </div>
                    <div className="dbody mt-2">
                        <div className="bodybtns">
                            <button className='dbtn' style={{width:'426px'}}>
                                <img src="chat2.png" className='mb-1' alt="" />
                                <p className='mt-2'>Report Post</p>
                            </button>
                        </div>
                        <div className="mpost">

                            <div className="post">

                            </div>
                        </div>
                        <div className="bodybtns">
                            <button className='dbtn'>
                                <img src="chat2.png" alt="" />
                                <p className='mt-2'>Reply Post</p>
                            </button>
                            <button className='dbtn2'>
                                <div id='dbtn3img'>
                                </div>
                                <p>New Post</p>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Report

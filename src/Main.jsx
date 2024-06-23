// import React from 'react'
import { NavLink } from 'react-router-dom'
import React, { useEffect } from 'react';
import Aos from 'aos';


function Main() {
    
    return (
        <>

            <div className="main">
                <div className="headz col-xxl-12 col-xl-11 col-lg-11 col-md-12 col-sm-12 mx-auto ">
                    <img src="pf3.png" className='mt-2' alt="" id='aeroplane' />
                    <h2 className='text-center pt-3'>Words Of <b>Palestine</b></h2>
                    <h6>Boost Palestine's Voice on Social Media with a Single Click - Everyone</h6>
                    <div className="response"  >
                        <div className="sresponse">
                            <div className="rimg">
                                <img src="share2.png" alt="" />
                            </div>
                            <NavLink className='nav-link' to='Response'>
                                <div className="rtext">
                                    <h5 className=''>Share a response</h5>
                                    <p>Elevate the exposure of pro-palestine post with a suggested content</p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sresponse">
                            <div className="rimg">
                                <img src="Report.png" alt="" />
                            </div>

                            <NavLink className='nav-link' to='Report'>
                                <div className="rtext">
                                    <h5 id='report'>Report content</h5>
                                    <p>Help to prevent the sppread of false or anti-palestine content by reporting it</p>
                                </div>
                            </NavLink>
                        </div>
                        <div className="sresponse">
                            <div className="rimg">
                                <img src="Add.png" alt="" />
                            </div>
                            <NavLink className='nav-link' to="Add">
                                <div className="rtext">

                                    <h5 className=''>Add a post</h5>
                                    <p>Add a post to express your opposition to the violence against Palestinians.</p>
                                </div>
                            </NavLink>
                        </div>

                    </div>

                </div>

            </div>
            <div className="main2">
                <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-5 col-sm-10 head2 mt-2 ">
                    <div className="box1">
                        <div className="icon">
                            <img src="plus.png" alt="" />
                        </div>
                        <h6 className='mt-2'>Add</h6>
                        <p>You can use the feature to add postings for your Palestinian brothers and sisters to support them in speaking out against injustice.
                        </p>
                    </div>
                    <div className="box1">
                        <div className="icon">
                            <img src="eye.png" alt="" />
                        </div>
                        <h6 className='mt-2'>View</h6>
                        <p>The tool will show you Pro-Palestine content that was collected by our team of social media experts
                        </p>
                    </div>
                    <div className="box1">
                        <div className="icon">
                            <img src="coment.png" alt="" />
                        </div>
                        <h6 className='mt-2'>Comment</h6>
                        <p>
                            Get a pre-set text written by our team, copy response and comment on the post
                        </p>
                    </div>
                    <div className="box1">
                        <div className="icon">
                            <img src="share.png" alt="" />
                        </div>
                        <h6 className='mt-2'>Make an impact</h6>
                        <p>The more people comment, the post will have better exposure on social media and reach more people</p>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Main

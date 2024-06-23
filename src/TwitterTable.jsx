import React,{useState,useEffect} from 'react'
import Table from './Table'
import Panel from './ZPanel'
import { NavLink } from 'react-router-dom'
function Twitter() {

    return (
        <>
            <div className="dashboardx">
                <div className="dbodyx">
                    <Panel />
                    <div className="reqformx"> <NavLink to='/Adminpost' className='nav-link'>

                    </NavLink>

                        <div className="text-center col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-11  mt-2 mainreqx">
                            <div className="btnhead">
                                <span>
                                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        <img src="ham.png" id='sham' alt="" />
                                    </a>
                                </span>  
                                 <NavLink to='/adminpost'><button type="button" class="btn btn-primary mt-2" id='postbtn'>Add Post</button></NavLink>

                            </div>

                            <div className=" mt-1">
                                <div class="header">
                                    <h2>Active posts for Twitter</h2>
                                </div>
                                <Table name={'twitter'}/>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Twitter

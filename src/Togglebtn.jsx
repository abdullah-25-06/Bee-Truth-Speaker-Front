import React from 'react'
import { NavLink } from 'react-router-dom'

function Togglebtn() {

    return (
        <>
            <div className="canvas">

                <div className="nav-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <img src="menu.png" alt="" />
                </div>
            </div>


            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">MENU</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id='canvasclose'></button>
                </div>
                <div class="offcanvas-body">
                    <div className='content'>
                        <ul id='ul'>
                            <NavLink className='nav-link' to='/'>
                                <li id='li'>
                                    <img src="home.png" alt="" /> Home
                                </li>
                            </NavLink>
                            <NavLink className='nav-link' to='/Response'>
                                <li id='li'>
                                    <img src="thumb.png" alt="" /> Share a response
                                </li>
                            </NavLink>
                            <NavLink className='nav-link' to='/Report'>
                                <li id='li'>
                                    <img src="ex.png" alt="" /> Report content
                                </li>
                            </NavLink>
                            <NavLink className='nav-link' >

                                <li id='li'>
                                    <img src="update.png" alt="" />Stay updated
                                </li>
                            </NavLink>
                            <NavLink className='nav-link'>

                                <li id='li'>
                                    <img src="mail.png" alt="" />Share feedback
                                </li>
                            </NavLink>
                        </ul>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Togglebtn

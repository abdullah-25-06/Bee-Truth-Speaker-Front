import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';


function ZPanel() {
    const navigate = useNavigate()
    const btnHandler =()=>{
        localStorage.removeItem('tokenss')
        localStorage.removeItem('IsLoggedIn')
        navigate('/login')
    }
    const toggleSidebar = () => {
        document.body.classList.toggle("open");
    }
    return (
        <>
            <div className="dcol1">
                <nav class="sidebar col-xxl-12 col-xl-12 col-1g-11" id="side">
                    <div className="sidebar-inner">
                        <header class="sidebar-header">

                        </header>
                        <nav class="sidebar-menu">
                            <div className="beehead">
                                <NavLink className='nav-link' to='/Dashboard'>

                                    <img id='bee' src="bee.png" alt="" />
                                </NavLink>
                            </div>
                            <hr />
                            <p style={{ fontSize: '15px', paddingTop: '', marginLeft: '10px' }}>Social Platforms</p>
                            <button type="button" id="sbutton">
                                <img src="tw.png" alt="" />
                                <NavLink className="nav-link" to="/Twitter"><span id='spam'>Twitter</span></NavLink>
                            </button>
                            <button type="button" id="sbutton">
                                <img src="insta.png" />
                                <NavLink className="nav-link" to="/Instagram"><span id="spam">Instagram</span></NavLink>

                            </button>
                            <button type="button" id="sbutton">
                                <img src="fb.png" />
                                <NavLink className='nav-link' to='/Facebook'><span id='spam'>Facebook</span></NavLink>

                            </button>
                            <button type="button" id="sbutton">
                                <img src="tiktok.png" />
                                <NavLink className='nav-link' to='/Tiktok'><span id='spam'>Tiktok</span></NavLink>

                            </button>
                            <hr />
                            <button type="button" id="sbutton">
                                <img src="use.png" />
                                <NavLink className='nav-link' to='/Userposts'><span id='spam'>User table</span></NavLink>

                            </button>
                            <hr />
                            <button type="button" id="sbutton" onClick={btnHandler}>
                                <NavLink className="nav-link"  ><span id='spam' >Sign Out</span>
                                </NavLink>
                            </button>
                            <hr />
                        </nav>
                    </div>
                </nav>
            </div>
            <div className="can">
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Be Truth Speaker</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className='content'>
                            <ul id='ul'>
                                <p id='splatform'>Social Platforms</p>
                                <button type="button" id="sbutton">
                                    <img src="tw.png" id='simg' alt="" />
                                    <NavLink className="nav-link" to="/Twitter"><span id='spam2'>Twitter</span></NavLink>
                                </button>
                                <button type="button" id="sbutton">
                                    <img src="insta2.png" id='simg' />
                                    <NavLink className="nav-link" to="/Instagram"><span id="spam2">Instagram</span></NavLink>

                                </button>
                                <button type="button" id="sbutton">
                                    <img src="fb.png" id='simg' />
                                    <NavLink className='nav-link' to='/Facebook'><span id='spam2'>Facebook</span></NavLink>

                                </button>
                                <button type="button" id="sbutton">
                                    <img src="tiktok.png" id='simg' />
                                    <NavLink className='nav-link' to='/Tiktok'><span id='spam2'>Tiktok</span></NavLink>

                                </button>
                                <hr />
                                <button type="button" id="sbutton">
                                    <img src="use.png" id='simg' />
                                    <NavLink className='nav-link' to='/Userposts'><span id='spam2'>User table</span></NavLink>

                                </button>
                                <hr />
                                <button type="button" id="sbutton" onClick={btnHandler}>
                                    <NavLink className="nav-link" ><span id='spam2' >Sign Out</span>
                                    </NavLink>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="button"
                class="sidebar-burger"
                onClick={toggleSidebar}
                id="hambutton"
            ></button>
        </>
    )
}
export default ZPanel
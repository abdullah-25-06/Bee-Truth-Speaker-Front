import React from 'react'

import { NavLink } from 'react-router-dom'

function Dropdown() {
    return (
        <>
            <li class="nav-item dropdown" id='drop'>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Supporting Content
                </a>
                <ul class="dropdown-menu" id='dropmenu'>
                    <NavLink class="dropdown-item" to="/Response"><li id='drop2'><img src="share2.png" alt="" /> Share a response</li></NavLink>
                    <NavLink class="dropdown-item" to="/Report"><li id='drop2'><img src="report.png" alt="" /> Report a content</li></NavLink>
                    <NavLink class="dropdown-item" to="/Add"><li id='drop2'><img src="add.png" alt="" /> Add a post</li></NavLink>
                </ul>
            </li>
        </>
    )
}

export default Dropdown

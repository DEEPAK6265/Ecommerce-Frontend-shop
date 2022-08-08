import './header.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
function Header() {
  return (
    <div className="bod">
        <Nav>
            <div class="head">
                {/* <li>
                    <Link to="/shop"></Link>
                </li>
                <li>
                    <Link to="/ourstory">OurStory</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li> */}
                
             </div> 
            <div class="main"><b>Mybazar</b>

            {/* <h4 class ="head3"><Link to ="/login">Login</Link></h4> */}
            </div>
        </Nav>
    </div>
    
  )
}

export default Header
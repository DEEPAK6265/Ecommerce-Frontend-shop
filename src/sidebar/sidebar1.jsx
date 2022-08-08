import React, { useState } from 'react';
import './sidebar1.css';
import {
    FaTh,
    FaBars,
    FaUsers,
    FaShopify,
    FaShoppingBag,
    FaShoppingBasket,
    FaBitbucket,
    FaMandalorian
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/dashboard",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/shopview",
            name:"Shopview",
            icon:<FaShopify/>
        },
        {
            path:"/employeeview",
            name:"Employee",
            icon:<FaUsers/>
        },
        {
            path:"/inventryview",
            name:"PInventory",
            icon:<FaShoppingBag/>
        },
        {
            path:"/specificationview",
            name:"Pspecification",
            icon:<FaShoppingBasket/>
        },
        {
            path:"/bankingview",
            name:"Banking",
            icon:<FaBitbucket/>
        },
        // {
        //     path:"/request",
        //     name:"Request",
        //     icon:<FaMandalorian/>
        // },

    ]
    return (
        <div className='containe'>
           <div style={{width: isOpen ? "180px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MicroCom</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
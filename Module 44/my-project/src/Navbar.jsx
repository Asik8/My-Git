/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Link from './link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, title: "Home", path: "https://example.com/1" },
        { id: 2, title: "Blog", path: "https://example.com/2" },
        { id: 3, title: "Contact Us", path: "https://example.com/3" },
        { id: 4, title: "Visit our Shop", path: "https://example.com/4" },
        { id: 5, title: "About Us", path: "https://example.com/5" }
    ];

    return (
        <nav className='ml-4'>
            <div className='md:hidden text-2xl' onClick={()=>setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className=''></AiOutlineMenu>
                }
                
            </div>

            {/* Two ways to hide navbar
            1. ${open ? '' : 'hidden'}
            2. ${open ? 'top-6' : '-top-60'}
            */}
            <ul className= {
                `md:flex ml-3 absolute md:static duration-1000 ${open ? 'top-6' : '-top-60'} bg-yellow-400 px-2 shadow-lg`
            }>
                {
                    routes.map((route) => {
                        return <Link key={route.id} route={route}></Link>
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;
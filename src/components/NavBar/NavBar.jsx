import { useState } from "react";
import Link from "../../Link/Link";
import { FiMenu } from 'react-icons/fi'; 
import { ImCross } from 'react-icons/im'

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className="bg-pink-300 p-6 ">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <ImCross className="text-4xl"></ImCross>
                     : <FiMenu className="text-4xl"></FiMenu>
                }
                
            </div>
            <ul className={`md:flex duration-1000 rounded-lg p-3 shadow-gray-700
            ${open ? 'top-16' : '-top-60'}
             shadow-xl md:static absolute bg-rose-300`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;
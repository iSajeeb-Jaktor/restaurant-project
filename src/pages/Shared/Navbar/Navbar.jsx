import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-70 max-w-screen-xl bg-neutral	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li> <Link to='/'>Home</Link> </li>
                            <li> <Link to='/menu'>Our Menu</Link> </li>
                            <li> <Link to='/order/salad'>Oder</Link> </li>
                            <li> <Link to='/login'>Login</Link> </li>

                        </ul>
                    </div >
                    <div>
                        <a className=" text-3xl text-white font-black font-serif"><Link to='/'>BISTRO BOSS</Link></a>
                        <h4 className='text-xl text-white'><Link to='/'>R E S T A U R A N T</Link></h4>
                    </div>
                </div>
                <div className="navbar-center text-white hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to='/'>Home</Link> </li>
                        <li className='text-white'> <Link to='/menu'>Our Menu</Link> </li>
                        <li className='text-white'> <Link to='/order/salad'>Oder</Link></li>
                        <li className='text-white'> <Link to='/login'>Login</Link> </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
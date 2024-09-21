import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidCalendarEdit } from 'react-icons/bi';
import { FaCalendar, FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdOutlinePayment, MdRateReview, MdShoppingBag } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMail } from 'react-icons/io5';

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className='flex'>
            
            {/* Dashboard side bar */}
            <div className="w-64 p-4 min-h-screen bg-orange-400 " >
                <ul className="menu">
                    <li className='text-black font-medium text-base uppercase hover:text-white'>
                        <NavLink to='/dashboard/userHome'>
                            <AiFillHome></AiFillHome>
                            User home
                        </NavLink>
                    </li>
                    <li className='text-black font-medium my-3 text-base uppercase hover:text-white'>
                        <NavLink to='/dashboard/reservation'>
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li className='text-black font-medium text-base uppercase hover:text-white'>
                        <NavLink to='/dashboard/payment'>
                            <MdOutlinePayment></MdOutlinePayment>
                            Payment history
                        </NavLink>
                    </li>
                    <li className='text-black font-medium my-3 text-base uppercase hover:text-white'>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li className='text-black font-medium text-base uppercase hover:text-white'>
                        <NavLink to='/dashboard/review'>
                            <MdRateReview></MdRateReview>
                            Add review
                        </NavLink>
                    </li>
                    <li className='text-black font-medium mt-3 text-base uppercase hover:text-white'>
                        <NavLink to='/dashboard/bookings'>
                            <BiSolidCalendarEdit></BiSolidCalendarEdit>
                            My booking
                        </NavLink>
                    </li>
                    <div className="divider divider-neutral"></div>
                    <li className='text-black font-medium text-base uppercase hover:text-white'>
                        <NavLink to='/'>
                            <AiFillHome></AiFillHome>
                            Home
                        </NavLink>
                    </li>
                    <li className='text-black font-medium text-base my-3 uppercase hover:text-white'>
                        <NavLink to='/menu'>
                            <GiHamburgerMenu></GiHamburgerMenu>
                            Menu
                        </NavLink>
                    </li>
                    <li className='text-black font-medium text-base uppercase hover:text-white'>
                        <NavLink to='/order/salad'>
                            <MdShoppingBag></MdShoppingBag>
                            Shop
                        </NavLink>
                    </li>
                    <li className='text-black font-medium  text-base mt-3 uppercase hover:text-white'>
                        <NavLink to='/contact'>
                            <IoMail></IoMail>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1 p-4 mb-12'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;
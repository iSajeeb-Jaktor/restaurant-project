import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidCalendarEdit } from 'react-icons/bi';
import { FaAd, FaCalendar, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { MdOutlinePayment, MdRateReview, MdShoppingBag } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMail } from 'react-icons/io5';
import { TfiMenuAlt } from 'react-icons/tfi';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();


    return (
        <div className='flex'>

            {/* Dashboard side bar */}
            <div className="w-64  p-4 min-h-screen bg-orange-400 " >

                <div className='fixed'>
                    <Link to='/'><h3 className=' ml-6 uppercase text-black font-bold text-xl'>R e s t a u r e n t</h3></Link>
                    <ul className="menu ">
                        {
                            isAdmin ? <>
                            
                                <li className='text-black font-medium text-base uppercase hover:text-white'>
                                    <NavLink to='/dashboard/adminHome'>
                                        <AiFillHome></AiFillHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li className='text-black font-medium my-3 text-base uppercase hover:text-white'>
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils></FaUtensils>
                                        Add items
                                    </NavLink>
                                </li>
                                <li className='text-black font-medium text-base uppercase hover:text-white'>
                                    <NavLink to='/dashboard/manageItems'>
                                        <TfiMenuAlt></TfiMenuAlt>
                                        Manage items
                                    </NavLink>
                                </li>
                                <li className='text-black font-medium my-3 text-base uppercase hover:text-white'>
                                    <NavLink to='/dashboard/bookings'>
                                       <FaAd></FaAd>
                                        Manage bookings
                                    </NavLink>
                                </li>
                                <li className='text-black font-medium my-3 text-base uppercase hover:text-white'>
                                    <NavLink to='/dashboard/users'>
                                        <FaUsers></FaUsers>
                                        All users
                                    </NavLink>
                                </li>

                            </>  
                            // -------- -----------User menu show---------------------------------
                                :
                                <>
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
                                </>
                        }

                        {/* -------------------------shared dashBoard ----------------*/}

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
            </div>
            {/* Dashboard content */}
            <div className='flex-1 p-4 mb-12'>
                <Outlet></Outlet>
            </div>
        </div>

    );
};

export default Dashboard;
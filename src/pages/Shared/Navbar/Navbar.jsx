import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContest } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import { IoMdLogOut } from "react-icons/io";
import useAdmin from "../../../hooks/useAdmin";








const NavBar = () => {
    const { user, logOut } = useContext(AuthContest);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>

    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    <li className="">
                        <Link to='/dashboard/cart'>

                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge border-none bg-red-600 text-xl text-black font-semibold badge-sm indicator-item py-3"> {cart.length} </span>
                            </div>

                        </Link>
                    </li>


                    {
                        user ? <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-15 rounded-full">
                                        <img
                                            alt=""
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        {
                                            isAdmin ? <><Link to='/dashboard/adminHome' >
                                                <div className="flex place-items-center	gap-3">
                                                    <div className="w-10 rounded-full">
                                                        <img
                                                            alt=""
                                                            src={user.photoURL} />
                                                    </div>
                                                    <p className=" text-black font-semibold">{user?.displayName}</p>
                                                </div>
                                            </Link></> : <> <Link to='/dashboard/userHome' >
                                                <div className="flex place-items-center	gap-3">
                                                    <div className="w-10 rounded-full">
                                                        <img
                                                            alt=""
                                                            src={user.photoURL} />
                                                    </div>
                                                    <p className=" text-black font-semibold">{user?.displayName}</p>
                                                </div>
                                            </Link></>
                                        }
                                    </li>
                                    <li> <Link className="text-black text-lg font-semibold py-2" > Profile </Link> </li>
                                    <li>   <button onClick={handleLogOut} className="text-black text-lg font-semibold">  <IoMdLogOut className="text-black text-xl font-semibold"></IoMdLogOut> LogOut</button> </li>
                                </ul>
                            </div>
                        </> : <>  <Link to="/login">Login</Link> </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;
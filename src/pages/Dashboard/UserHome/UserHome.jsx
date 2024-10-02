import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TbTruckDelivery, TbWallet } from 'react-icons/tb';
import { FaClipboardList, FaUsers } from 'react-icons/fa';
import { PiChefHatLight } from 'react-icons/pi';
import useCart from '../../../hooks/useCart';
import useBooking from '../../../hooks/useBooking';
import { FaCartShopping } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { CiShop } from 'react-icons/ci';

const UserHome = () => {

    const [cart] = useCart();
    const [booking] = useBooking();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data
        }
    })
   

    

    return (

        <div>
            <h1 className='text-4xl font-semibold font-serif uppercase text-black'>Hi, Welcome Back!</h1>
            <div className="flex justify-center shadow  mt-8 gap-7">
                
                <div className=" py-7 px-14 rounded-lg flex bg-orange-400 ">
                    <CiShop className='text-7xl mt-2 mr-3 text-white'></CiShop>
                    <div>
                        <div className="stat-value text-white"> {payments.length} </div>
                        <div className="stat-title text-white text-lg font-semibold ">Shop</div>
                    </div>

                </div>
               
                <div className="py-7 px-12 rounded-lg flex  bg-blue-300">
                    
                    <FaClipboardList className='text-6xl mt-2 mr-3 text-white' ></FaClipboardList>
                    <div>
                        <div className="stat-value text-white"> {booking.length} </div>
                        <div className="stat-title text-white text-lg font-semibold"> Bookings </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center items-center gap-x-52 mt-40'>
                <div className=''>
                    <img className='w-48 rounded-full ' src={user.photoURL} alt="" />
                    <h1 className='text-black mt-7 text-4xl font-mono font-medium'> {user.displayName} </h1>
                </div>
                <div className='ml-24'>
                    <h1 className='uppercase text-black text-3xl font-sans font-semibold'>Your Activities</h1>
                    <div className='mt-7'>
                        <p className='text-red-700 uppercase font-mono flex items-center gap-2 text-2xl font-semibold'> <TbWallet></TbWallet>  Payment: {payments.length}</p>
                        <p className='text-blue-600 my-2 font-mono uppercase flex items-center gap-2 text-2xl font-semibold'> <FaCartShopping></FaCartShopping> Orders: {cart.length}</p>
                        <p className='text-yellow-600 font-mono uppercase flex items-center gap-2 text-2xl font-semibold' > <SlCalender /> Booking: {booking.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
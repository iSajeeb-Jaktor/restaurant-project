import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { TbTruckDelivery, TbWallet } from 'react-icons/tb';
import { FaUsers } from 'react-icons/fa';
import { PiChefHatLight } from 'react-icons/pi';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    return (
        <div>
            <h1 className='text-4xl font-semibold font-serif uppercase text-black'>Hi, Welcome Back!</h1>
            <div className="flex shadow  mt-8 gap-7">
                <div className="rounded-lg flex p-7 text-white bg-purple-400 ">
                    <TbWallet className='text-6xl mt-2 text-white'></TbWallet>
                    <div>
                        <div className="stat-value"> {stats.revenue} </div>
                        <div className="stat-title text-white text-lg font-semibold ">Revenue</div>
                    </div>

                </div>
                <div className=" py-7 px-9 rounded-lg flex bg-orange-400 ">
                    <FaUsers className='text-6xl mt-2 mr-3 text-white'></FaUsers>
                    <div>
                        <div className="stat-value text-white"> {stats.users} </div>
                        <div className="stat-title text-white text-lg font-semibold ">Customers</div>
                    </div>

                </div>
                <div className="py-7 px-12 rounded-lg flex bg-red-400 ">
                    <PiChefHatLight className='text-6xl mt-2 mr-3 text-white'></PiChefHatLight>
                    <div>
                        <div className="stat-value text-white"> {stats.menuItems} </div>
                        <div className="stat-title text-white text-lg font-semibold">Products</div>
                    </div>

                </div>

                <div className="py-7 px-12 rounded-lg flex  bg-blue-300">
                    <TbTruckDelivery className='text-6xl mt-2 mr-3 text-white'></TbTruckDelivery>
                    <div>
                        <div className="stat-value text-white"> {stats.orders} </div>
                        <div className="stat-title text-white text-lg font-semibold">Orders</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;
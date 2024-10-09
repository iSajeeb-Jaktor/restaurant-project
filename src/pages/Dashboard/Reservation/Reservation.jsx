import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaClipboardList } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Reservation = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        if (user && user.email) {
            // reservation item send to the dataBase
            const reservationItem = {
                name: data.name,
                email: data.email,
                guest: parseFloat(data.guest),
                phone: (data.phone),
                time: (data.time),
                date: (data.date)
            }
            const reservationRes = await axiosSecure.post('/reservations', reservationItem);
            console.log(reservationRes.data);
            if (reservationRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} your reservation is complete.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/bookings')
            }
            

        }

    }
    return (
        <div>
            <SectionTitle subheading=" Reservation " heading="Book a table"></SectionTitle>
            <div className='ml-8'>
                <form className='p-10' onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex gap-6'>

                        {/* Date */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Date*</span>
                            </div>
                            <input {...register("date", { required: true })} type="date" placeholder="" className="input input-bordered w-full" />
                        </label>

                        {/* Time */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Time*</span>
                            </div>
                            <input {...register("time", { required: true })} type="time" placeholder="" className="input input-bordered w-full" />
                        </label>

                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Guest*</span>
                            </div>
                            <select defaultValue="default" {...register("guest", { required: true })} className="select select-bordered w-full">
                                <option disabled >1</option>
                                <option>1</option>
                                <option >2</option>
                                <option >3</option>
                                <option >4</option>
                                <option >5</option>
                            </select>
                        </label>
                    </div>
                    {/* recipe details */}
                    <div className='flex gap-6'>

                        {/* Name */}

                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Name*</span>
                            </div>
                            <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        </label>

                        {/* Phone */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Phone*</span>
                            </div>
                            <input {...register("phone", { required: true })} type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        </label>


                        {/* email */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Email*</span>
                            </div>
                            <input {...register("email", { required: true })} type="email" placeholder="Your Email" className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* button  */}

                    <div className='flex justify-center mt-14'>
                        <button className='btn text-xl font-semibold rounded-none hover:bg-orange-500 bg-orange-500 text-white' > Book A Table <FaClipboardList className='text-xl' /> </button>
                    </div>
                </form>
            </div>

            <div>
                <SectionTitle subheading=' Visit us ' heading='Our location'></SectionTitle>
                <div className='flex justify-evenly mb-28'>
                    <div>
                        <button className='btn px-28 text-2xl rounded-none bg-yellow-600 text-white hover:bg-yellow-600 '> <FiPhoneCall></FiPhoneCall></button>
                        <div className='text-center mt-6'>
                            <h2 className='text-2xl text-black '>Phone</h2>
                            <p className='mt-3'>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn px-28 text-2xl rounded-none bg-yellow-600 text-white hover:bg-yellow-600 '> <IoLocationSharp></IoLocationSharp></button>
                        <div className='text-center mt-6'>
                            <h2 className='text-2xl text-black '>Address</h2>
                            <p className='mt-3'>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                    <div>
                        <button className='btn px-28 text-2xl rounded-none bg-yellow-600 text-white hover:bg-yellow-600 '> <MdWatchLater></MdWatchLater></button>
                        <div className='text-center mt-6'>
                            <h2 className='text-2xl text-black '>Working hours</h2>
                            <p className='mt-3'>Mon - Fri: 08:00 - 22:00 <br />
                                Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactCoverImg from '../../assets/contact/banner.jpg'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import { FiPhoneCall } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdWatchLater } from 'react-icons/md';

import Swal from 'sweetalert2';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';




const Contact = () => {
    const [capValue, setCapValue] = useState(null);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_90dpque', 'template_n9gr0h5', form.current, {
                publicKey: 'QnrLnx8XkF4TLkFUu',
            })
            .then(
                () => {
                    console.log('SUCCESS!', emailjs);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your message has been sent.",
                        showConfirmButton: false,
                        timer: 1500
                    });

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <Helmet>
                <title>HomeStyle Restaurant -- Order</title>

            </Helmet>
            <Cover img={contactCoverImg} title="Contact us"></Cover>
            <SectionTitle subheading=" Visit us " heading='our location' ></SectionTitle>
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

            {/* contact form */}
            <SectionTitle subheading='Send us a message' heading='Contact form'></SectionTitle>

            <div className='mb-7 px-16 pb-16'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='flex gap-6'>
                        <label className="form-control  w-full my-6">
                            <div className="label">
                                <span className="label-text">Name*</span>
                            </div>
                            <input required className="input input-bordered w-full" placeholder='Enter your name' type="text" name="user_name" />
                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Email*</span>
                            </div>
                            <input required placeholder='Enter your email' className="input input-bordered w-full" type="email" name="user_email" />
                        </label>
                    </div>
                    {/* message */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Message*</span>
                        </div>
                        <textarea required placeholder='Write your message here' className="textarea textarea-bordered h-80" name="message" />
                    </label>
                    
                    
                    <div className='mt-36 mb-96 flex justify-center'>
                        <input className='btn font-semibold text-lg rounded-none hover:bg-orange-500 bg-orange-500 text-white px-14' type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
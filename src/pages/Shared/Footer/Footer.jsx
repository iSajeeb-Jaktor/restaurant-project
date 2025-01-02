import React from 'react';
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';


const Footer = () => {
    return (
        <footer>
            <div className="footer  bg-neutral text-neutral-content p-10">
                <div className=''>
                    <aside className='mx-auto text-white'>
                        <p className='uppercase text-2xl font-semibold '>Contact us</p>
                        <p>
                            123 ABS Street, Uni 21, Bangladesh
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                </div>
                <div className='mx-auto text-white'>
                    <h6 className="footer-title text-center text-xl">Follow Us</h6>
                    <h4 className='text-center mb-3'>Join us on social media</h4>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <IoLogoTwitter className='text-2xl'></IoLogoTwitter>
                        </a>
                        <a>
                            <FaInstagramSquare className='text-2xl'></FaInstagramSquare>
                        </a>
                        <a>
                            <FaFacebookF className='text-2xl'></FaFacebookF>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by HomeStyle Restaurant Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
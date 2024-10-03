import React from 'react';
import useCart from '../../../hooks/useCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            <SectionTitle
                subheading=' My cart '
                heading="Want add more?"
            ></SectionTitle>
            <div className='flex justify-evenly mt-8 '>
                <h2 className='text-4xl font-semibold text-black'>Items: {cart.length}</h2>
                <h2 className='text-4xl font-semibold text-black'>Total price: ${totalPrice}</h2>
                {cart.length ? <Link to="/dashboard/payment">
                    <button className='px-4 py-2 rounded bg-orange-400 text-white'> Visa Pay</button>
                </Link> : <button disabled className='btn px-4 py-2 rounded text-lg  bg-orange-400 text-white'> Visa Pay</button>
                }
                

            </div>
            <div className="overflow-x-auto rounded-t-lg  mt-10 mb-12">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-orange-400  text-lg font-semibold text-white'>
                        <tr>
                            <th>  </th>
                            <th>Item Image</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='mb-9 mt-5'>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <p>{item.name}</p>
                                    <br />

                                </td>
                                <td> ${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn bg-red-700 text-white"> <RiDeleteBin5Line></RiDeleteBin5Line>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
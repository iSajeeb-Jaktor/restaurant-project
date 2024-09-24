import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading ,refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    
    
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                   
                }


            }
        });
    }


    return (
        <div>
            <SectionTitle
                subheading="Hurry Up!"
                heading="Manage all items"
            ></SectionTitle>

            <div>
                <div>
                    <h3>Total users: {menu.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='uppercase'>
                                    <th>  </th>
                                    <th> Item Image </th>
                                    <th>Item name</th>
                                    <th>Price</th>
                                    <th>action</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((item, index) => <tr key={item._id}>
                                        <td>   {index + 1} </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-14 h-14">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td> {item.name} </td>
                                        <td>
                                            $ {item.price}
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className='text-white btn text-lg bg-orange-400' >
                                                <FiEdit></FiEdit>
                                            </button>
                                            </Link>

                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteItem(item)} className="btn bg-red-700 text-lg text-white">
                                                <RiDeleteBin5Line></RiDeleteBin5Line>
                                            </button>

                                        </td>
                                    </tr>)
                                }



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
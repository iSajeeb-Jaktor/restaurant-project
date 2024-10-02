import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useBooking from '../../../hooks/useBooking';
import { RiDeleteBin5Line } from 'react-icons/ri';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const [booking, refetch] = useBooking();
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
                axiosSecure.delete(`/reservations/${id}`)
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
            <SectionTitle subheading=' Excellent Ambience ' heading='My Bookings'></SectionTitle>

            <div>
                <h1 className='text-4xl font-semibold text-black' >Total Bookings: {booking.length} </h1>
                {/* <h1>My Price: {reservationPrice} </h1> */}
                {/* <h1>{booking.guest}</h1> */}
            </div>

            <div className="overflow-x-auto rounded-t-lg  mt-10 mb-12">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-orange-400 text-lg font-semibold text-white'>
                        <tr>
                            <th>  </th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Phone</th>
                            <th>Guest Member</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='mb-9 mt-5'>
                        {/*  */}
                    
                        {
                            booking.map((bookingItem, index) => <tr key={bookingItem._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {bookingItem.name}
                                </td>
                                <td>
                                    <p>{bookingItem.time}</p>

                                </td>
                                <td> {bookingItem.phone} </td>
                                <td > {bookingItem.guest} guest </td>
                                <td>
                                    <button onClick={() => handleDelete(bookingItem._id)} className="btn bg-red-700 text-white"> <RiDeleteBin5Line></RiDeleteBin5Line>
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

export default MyBookings;
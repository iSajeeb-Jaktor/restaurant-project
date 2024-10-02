import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments= [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data
        }
    })

    return (
        <div>
            <SectionTitle subheading='At a Glance!' heading="Payment history"></SectionTitle>
            <h1 className='text-black font-bold font-mono uppercase text-4xl'>Total Payments: {payments.length}</h1>
            <div className="overflow-x-auto rounded-t-lg  mt-10 mb-12">
                <table className="table w-full">
                    {/* head */}
                    <thead className='bg-orange-400 uppercase text-white'>
                        <tr>
                            <th>  </th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody className='mb-9 mt-5'>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {payment.email}
                                </td>
                                <td>
                                    <p>{payment.status}</p>

                                </td>
                                <td> ${payment.price}</td>
                                <td>
                                    {payment.transactionId}
                                </td>
                                <td>
                                    {payment.date}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
import { React, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Order from './Order';

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const url = `https://books-reseles-server.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = res.json()
            return data
        }

    })

    return (
        <div>
            <h3 className="text-3xl mb-3">My Orders</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Pay Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(book => <Order key={book._id} book={book}></Order>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyOrder;
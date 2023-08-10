import { useQuery } from '@tanstack/react-query';
import { React, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import BuyerDisplay from './BuyerDisplay';

const AllBuyer = () => {
    const [allBuyer, setBuyer] = useState([])
    const { data: allBuyers = [], isLoading } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch(`https://phones-resells-server.vercel.app/AllBuyer`)
            const data = await res.json()
            setBuyer(data)
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        fetch(`https://phones-resells-server.vercel.app/allBuyer/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('delete successfully')
                    const remaing = allBuyer.filter(buyer => buyer._id !== id)
                    setBuyer(remaing)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyer.map(buyer => <BuyerDisplay key={buyer._id} handleDelete={handleDelete} buyer={buyer}></BuyerDisplay>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;
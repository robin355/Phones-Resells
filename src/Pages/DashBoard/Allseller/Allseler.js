import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import SellerDisplay from './SellerDisplay';

const Allseler = () => {
    const [allselers, setSellers] = useState([])
    const { data: allseler = [] } = useQuery({
        queryKey: ['allseler'],
        queryFn: async () => {
            const res = await fetch(`https://books-reseles-server.vercel.app/AllSeller`)
            const data = await res.json()
            setSellers(data)
            return data
        }
    })
    const handleDelete = (id) => {
        fetch(`https://books-reseles-server.vercel.app/allseler/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('delete successfully')
                    const remaing = allselers.filter(sell => sell._id !== id)
                    setSellers(remaing)
                }
            })
    }

    console.log(allselers)
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
                            allselers.map(seler => <SellerDisplay key={seler._id} seler={seler} handleDelete={handleDelete}></SellerDisplay>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allseler;
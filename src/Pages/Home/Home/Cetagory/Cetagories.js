import React, { useEffect, useState } from 'react';
import Cetagory from './Cetagory';

const Cetagories = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch('https://books-reseles-server.vercel.app/cetagorie')
            .then(res => res.json())
            .then(data => {
                setPhones(data)
            })
    }, [])


    return (
        <div className='mt-6'>

            <div className='flex gap-3 justify-center'>
                <div>
                    <input type="text" placeholder="Search Cetagorie" className="input input-bordered w-full" />
                </div>
                <div>
                    <button className="btn btn-secondary ">Searching</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 '>
                {
                    phones.map(phone => <Cetagory key={phone._id} phone={phone}></Cetagory>)
                }
            </div>
        </div>
    );
};

export default Cetagories;
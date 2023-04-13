import { React, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookModal/BookModal';
import Phone from './Phone';

const Phones = () => {
    const [phones, setphones] = useState([])
    const data = useLoaderData();
    useEffect(() => {
        fetch(`https://books-reseles-server.vercel.app/phones?categoryName=${data?.category}`)
            .then(res => res.json())
            .then(data => setphones(data))
    }, [data?.category])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 lg:p-[100px] '>
                {
                    phones.map(phone => <Phone key={phone._id} phone={phone}></Phone>)
                }
            </div>
            {
                <BookModal></BookModal>
            }
        </div>
    );
};

export default Phones;
import React, { useEffect, useState } from 'react';
import './NewArrival.css'
import DisplayProducts from './DisplayProducts';
const NewArrival = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/newArrival')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-bold text-2xl mb-5'>New Arrival</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>

                {
                    products.map(product => <DisplayProducts key={product._id} product={product}></DisplayProducts>)
                }
            </div>
        </div>
    );
};

export default NewArrival;

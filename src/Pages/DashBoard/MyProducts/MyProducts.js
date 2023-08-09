import { React, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Product from './Product';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/myProduct')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })

    }, [])
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myproduct/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('delete successfully')
                    const remaing = products.filter(pro => pro._id !== id)
                    setProducts(remaing)
                }
            })
    }



    return (
        <div>
            <h3 className='text-center text-orange-600'>My Products</h3>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product} handleDelete={handleDelete}></Product>)
                }
            </div>

        </div>
    );
};

export default MyProducts;
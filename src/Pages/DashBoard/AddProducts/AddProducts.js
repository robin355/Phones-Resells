import React from 'react';
import toast from 'react-hot-toast';

const AddProducts = () => {
    const handleProduct = (event) => {
        event.preventDefault()
        const form = event.target;
        const ProductName = form.productName.value;
        const orginalPrice = form.orginalPrice.value;
        const conditon = form.conditon.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const image = form.image.value;
        const ReselPrice = form.ReselPrice.value;
        const usedYear = form.usedYear.value;
        const AddProduct = {
            ProductName: ProductName,
            orginalPrice: orginalPrice,
            conditon: conditon,
            location: location,
            image: image,
            ReselPrice: ReselPrice,
            phone: phone,
            usedYear: usedYear
        }
        console.log(AddProduct)
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Add Product Successfully')
                }
            })
    }
    return (
        <div>
            <h1 className='text-center text-orange-600'>Add products</h1>
            <form onSubmit={handleProduct} className='grid grid-cols-1 gap-3 mt-6'>
                <input name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full" />
                <input name='orginalPrice' type="text" placeholder="Orginal Price" className="input input-bordered w-full" />
                <input name='conditon' type="text" placeholder="Condition" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                <input name='location' type="text" placeholder="metting Location" className="input input-bordered w-full" />
                <input name='image' type="text" placeholder="PhotoURL" className="input input-bordered w-full" />
                <input name='ReselPrice' type="text" placeholder="Resel price" className="input input-bordered w-full" />
                <input name='usedYear' type="text" placeholder="Used Year" className="input input-bordered w-full" />
                <input type="submit" className='w-full btn btn-accent' value="Add Product" />
            </form>
        </div>
    );
};

export default AddProducts;
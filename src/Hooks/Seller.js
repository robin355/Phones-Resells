import { React, useState, useEffect } from 'react';

const Seller = (email) => {
    const [isSeller, setisSeller] = useState(false)
    const [isSellerLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://books-reseles-server.vercel.app/Allusers/Seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisSeller(data.isSeller)
                    setIsLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
};

export default Seller;
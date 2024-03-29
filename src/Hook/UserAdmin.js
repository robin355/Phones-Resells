import React, { useEffect, useState } from 'react';

const UserAdmin = (email) => {
    const [isAdmin, setisAdmin] = useState(false)
    const [isAdminLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://phones-resells-server.vercel.app/Allusers/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisAdmin(data.isAdmin)
                    setIsLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
};

export default UserAdmin;
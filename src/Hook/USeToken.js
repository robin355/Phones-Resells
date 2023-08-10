import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const USeToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`https://phones-resells-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])
    return [token]
};

export default USeToken;
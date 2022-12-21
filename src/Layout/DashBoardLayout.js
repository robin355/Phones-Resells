import { React, useContext, useEffect, useState } from 'react';
import Navbar from '../Share/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom'

import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import UserAdmin from '../Hook/UserAdmin';


const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UserAdmin(user?.email)
    const [seller, setSeller] = useState(false)
    const [buyer, setBuyer] = useState(false)
    useEffect(() => {
        fetch(`https://books-reseles-server.vercel.app/seller?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSeller(true)
                }
            })

    }, [user?.email])
    useEffect(() => {
        fetch(`https://books-reseles-server.vercel.app/buyer?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setBuyer(true)
                }
            })

    }, [user?.email])

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {

                            buyer && <li><Link to='/dashboard/orders'>My Order</Link></li>

                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUser'>All User</Link></li>
                                <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
                                <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                            </>
                        }
                        {
                            seller && <>
                                <li><Link to='/dashboard/AddProduct'>Add products</Link></li>
                                <li><Link to='/dashboard/myProduct'>My products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
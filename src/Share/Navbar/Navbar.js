import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
const Navbar = () => {
    const { user, Logout } = useContext(AuthContext)
    const handleBtn = () => {
        Logout()
            .then(() => { toast.success('Logout SuccessFully') })
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>

                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/dashboard'>DashBoard</Link></li>
                                    <li><button onClick={handleBtn}>Logout</button></li>
                                </>
                                : <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">Phones Resells</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu lg:menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    {
                        user?.uid ?
                            <>
                                <li><Link to='/dashboard'>DashBoard</Link></li>
                                <li><button onClick={handleBtn}>Logout</button></li>
                            </>
                            : <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;
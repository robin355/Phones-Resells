import { React, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import USeToken from '../../Hook/USeToken';



const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { createUser, updateUserName } = useContext(AuthContext)
    const [seller, setSeller] = useState(false)
    const [buyer, setBuyer] = useState(false)
    const [tokenEmail, setTokenEmail] = useState('')
    const [token] = USeToken(tokenEmail)
    const navigate = useNavigate()
    const [SignupError, setSignupError] = useState('')
    if (token) {
        navigate('/login')
    }
    const handleSignup = data => {
        setSignupError(' ')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userName = {
                    displayName: data.name
                }
                updateUserName(userName)
                    .then(() => {
                        handleAllUser(data.name, data.email)
                        if (seller) {
                            handleSellerUser(data.name, data.email)
                        }
                        if (buyer) {
                            handleBuyerUser(data.name, data.email)
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            })
    }

    const handleBuyerUser = (name, email) => {
        const BuyerUser = { name, email };
        fetch(`http://localhost:5000/BuyerUsers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BuyerUser)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Buyer User Create');
            })
    }
    const handleAllUser = (name, email) => {
        const AllUser = { name, email };
        fetch(`http://localhost:5000/AllUsers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AllUser)
        })
            .then(res => res.json())
            .then(data => {
                setTokenEmail(email)
                console.log(' User Create');
            })
    }
    const handleSellerUser = (name, email) => {
        const user = { name, email };
        fetch(`http://localhost:5000/SellerUsers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('seller User Create');
            })
    }
    const handleSeller = () => {
        setSeller(true)
    }
    const handleBuyer = () => {
        setBuyer(true)
    }


    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: " Password is required",
                            minLength: { value: 6, message: 'Password Must be 6 character Longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <p><input type="checkbox" onClick={handleSeller} name="sell" id="seller" /> Seller Account</p>
                    <p><input type="checkbox" onClick={handleBuyer} name="buyer" id="buyer" /> Buyer Account</p>
                    <input className='btn btn-accent w-full mt-3' value='Signup' type="submit" />
                </form>
                {
                    SignupError && <p className='text-red-600'>{SignupError}</p>

                }
                <p>Already have an Account?<Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>COUNTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;
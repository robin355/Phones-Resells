import { React, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
const BookModal = ({ name, newPrice, img }) => {
    const { user } = useContext(AuthContext)
    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const UserName = form.userName.value;
        const email = form.email.value;
        const IteamName = form.iteamName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            UserName: UserName,
            email: email,
            IteamName: IteamName,
            image: img,
            price: price,
            phone: phone,
            location: location
        }
        console.log(booking)
        fetch('https://books-reseles-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('booking Confirm')
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleForm} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name='userName' type="text" placeholder="Your Name" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        <input name='iteamName' type="email" placeholder="Your Email" defaultValue={name} readOnly className="input input-bordered w-full" />
                        <input name='price' type="email" placeholder="Your Email" defaultValue={newPrice} readOnly className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="metting Location" className="input input-bordered w-full" />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>
                </div>
            </div>


        </div>
    );
};

export default BookModal;
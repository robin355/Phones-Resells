import React from 'react';
import { MdLocationOn, MdContactMail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
const ContactAddress = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:p-[100px] p-3'>
                <div>
                    <div>
                        <span className="text-xl">Bangladesh Address</span>
                        <div className='flex  items-center gap-2 mb-5 mt-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <MdLocationOn></MdLocationOn>
                            </div>
                            <div>
                                <h2 className='text-base'>18/5 Ring Road, Mohammadpur, Dhaka</h2>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2 mb-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <MdContactMail></MdContactMail>
                            </div>
                            <div>
                                <h2 className='text-base'>contact@robins.com</h2>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2 mb-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <MdContactMail></MdContactMail>
                            </div>
                            <div>
                                <h2 className='text-base'>sales@robins.com</h2>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2 mb-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                            </div>
                            <div>
                                <h2 className='text-base'>+8801628434061</h2>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <span className="text-xl">USA Address</span>
                        <div className='flex  items-center gap-2 mb-5 mt-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <MdLocationOn></MdLocationOn>
                            </div>
                            <div>
                                <h2 className='text-base'>1903 commonwealth st,Houston tx 77006</h2>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2 mb-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <MdContactMail></MdContactMail>
                            </div>
                            <div>
                                <h2 className='text-base'>contact@robins.com</h2>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2 mb-5 '>
                            <div className='text-[#0d6efd] text-xl'>
                                <MdContactMail></MdContactMail>
                            </div>
                            <div>
                                <h2 className='text-base'>sales@robins.com</h2>
                            </div>
                        </div>
                        <div className='flex  items-center gap-2 mb-5'>
                            <div className='text-[#0d6efd] text-xl'>
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                            </div>
                            <div>
                                <h2 className='text-base'>++1 (978) 441-0162</h2>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='shadow-lg p-5'>
                        <p className='text-[#8e98f3] mb-5'>Send Us a Message</p>
                        <form action="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Write message*</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Write Your Message"></textarea>

                            </div>
                            <button type='submit' className='btn btn-outline btn-accent w-full mt-5'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;
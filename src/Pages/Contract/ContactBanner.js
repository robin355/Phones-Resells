import React from 'react';

const ContactBanner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/b/contact-us-businessman-holding-cell-phone-mail-email-icon-cutomer-support-concept-banner-blue-background-copy-space-202928760.jpg")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-4xl font-semibold mt-5">Contact</h1>
                        <p className="mb-5">Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
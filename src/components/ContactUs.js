import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const ContactUs = () => {

    const [value, setValue] = useState();


    return (
        <section className="py-10 px-6 font-manrope text-center w-full">
            <div className="container mx-auto w-full">
                <p className="text-[#4A9D9F] uppercase text-[16px] font-semibold">Contact Us</p>
                <h2 className="text-4xl font-semibold mt-2 text-[#0E1010]">Get In Touch</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    We're here to help! If you have any questions, concerns, or feedback about Gatekipas, feel free to reach out. We'll get back to you as soon as possible.
                </p>

                <div className="flex md:flex-row flex-col justify-between mt-10 text-left w-full gap-4">

                    <div className="md:w-1/2 w-full md:mr-8">
                        <h3 className="text-xl font-semibold">Email Us</h3>
                        <p className="text-[#889596] mt-2 text-[16px]">For all inquiries, please contact us at:</p>
                        <p className="text-black font-bold mt-2">Support@Gatekipass.com</p>
                        <p className="text-[#889596] mt-4 text-[16px]">
                            Whether you're looking for product support, have questions about your subscription, or want to provide feedback, our team is ready to assist you.
                        </p>
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col gap-4">

                        <div className="flex justify-between w-full gap-4">
                            <div className="flex flex-col gap-2 w-full">
                                <p>First Name</p>
                                <input type="text" placeholder="First Name" className="input-field" />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <p>Last Name</p>
                                <input type="text" placeholder="Last Name" className="input-field" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p>Email</p>
                            <input type="email" placeholder="you@company.com" className="input-field" />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p>Phone Number</p>
                            <PhoneInput
                                defaultCountry="US"
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}
                                className="border border-gray-300 p-3 px-4 rounded"
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p>Message</p>
                            <textarea placeholder="Message" className="input-field h-32"></textarea>
                        </div>


                        <div className="mt-4 flex items-center gap-2">
                            <input type="checkbox" id="privacy" className="w-4 h-4" />
                            <label htmlFor="privacy" className="text-gray-600 text-sm">You agree to our friendly <a href="#" className="text-[#4A9D9F] underline">privacy policy</a>.</label>
                        </div>
                        <button className="mt-6 w-full bg-[#33DBA8] text-white py-3 rounded-lg font-semibold hover:bg-[#3b8587] transition-all">
                            Send Message
                        </button>
                        <p className="text-[16px]">
                            We're here to help! Drop us an email at <span className="text-[#33DBA8]">Support@Gatekipass.com</span> and let us know how we can assist you.
                        </p>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
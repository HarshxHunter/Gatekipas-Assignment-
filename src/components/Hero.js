import React from "react";

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-white to-green-100 py-16 text-center mb-60">

            <div className="container mx-auto px-6 md:px-6 md:pb-96 pb-10">
                <h1 className="text-4xl md:text-[86px] font-light text-gray-700 md:leading-[94.6px]">
                    Simplify <span className="font-semibold text-black">Visitor</span> and
                    <br />
                    <span className="font-bold text-black">Employee Management</span> with
                    <span className="block text-black font-semibold text-4xl md:text-[86px] leading-[94.6px]">Gatekipas</span>
                </h1>
                <p className="mt-4 text-[#566161] text-[20px] leading-[28px] text-center px-10 mx-auto">
                    Gatekipas provides secure, efficient, and scalable solutions for managing visitors, employees, and operations.
                    Streamline your processes and focus on what truly matters—your business.
                </p>
                <button className="mt-6 bg-[#33DBA8] hover:bg-green-600 text-white px-[63px] py-[12px] rounded-lg">
                    <p className="font-manrope font-semibold">Get Started</p>
                </button>
            </div>
            <div className="absolute md:bottom-[10%] md:right-[50%] -bottom-[250px] md:translate-x-[50%] md:translate-y-[50%] flex justify-center mt-20 px-2 md:px-0 ">
                {/* <div className="shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl"> */}
                    <img src="/imageG.png" alt="Gatekipas App" className="md:w-full w-[500px] " />
                {/* </div> */}
            </div>
        </section>
    );
};

export default HeroSection;
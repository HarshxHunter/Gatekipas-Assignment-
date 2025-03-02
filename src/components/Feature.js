import React from "react";

const features = [
    {
        title: "Quick Check-In/Check-Out",
        description: "Make visitor management fast and efficient.",
        image: "/card1.svg"
    },
    {
        title: "Digital Records",
        description: "Store visitor and employee data securely.",
        image: "/card2.svg"
    },
    {
        title: "Employee Management",
        description: "Monitor your team's schedules and attendance.",
        image: "/card3.png"
    },
    {
        title: "Host Notifications (Standard Plan)",
        description: "Keep your hosts informed when visitors arrive.",
        image: "/card4.png"
    },
    {
        title: "Emergency List (Standard Plan)",
        description: "Get quick visitor reports for emergencies.",
        image: "/card5.png"
    },
    {
        title: "Advanced Reporting (Standard Plan)",
        description: "Gain insights into visitor and employee activity.",
        image: "/card6.png"
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-16 text-center font-manrope mx-12 w-[100wh]">
            <div className="container mx-auto md:px-6">
                <p className="text-[#4A9D9F] uppercase text-[16px] font-semibold font-manrope">Features</p>
                <h2 className="text-4xl font-semibold mt-2 text-[#0E1010]">Why Gatekipas?</h2>
                <p className="mt-4 text-gray-600 mx-auto md:px-32 text-center w-full">
                    Gatekipas is designed to simplify and enhance the way businesses manage their operations.
                    From visitor management to employee scheduling and security, we ensure your business runs smoothly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 mt-12 md:mx-12">
                    {features.map((feature, index) => (
                        <div className="flex flex-col justify-start w-full text-left font-manrope">
                            <h3 className="text-xl font-semibold mt-4 text-[#0E1010]">{feature.title}</h3>
                            <p className="text-[#566161] text-[16px] font-[400] my-2">{feature.description}</p>

                            <div 
                                key={index} 
                                className="text-left bg-gray-100 p-6 rounded-xl relative shadow-lg overflow-hidden bg-cover bg-center md:w-[365px] md:h-[230px] w-full h-[230px]" 
                                style={{ backgroundImage: `url('${feature.image}')` }}
                            >
                                {/* <div className="relative">
                                    <img src={feature.image} alt={feature.title} className="w-full rounded-lg" />
                                </div> */}

                                {/* <img src={feature.image} alt="feature background" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 opacity-20" /> */}
                            </div>

                            <a href="#" className=" mt-3 flex items-center gap-2">
                                <p className="text-[#4A9D9F] font-semibold text-[16px]">
                                    Learn More
                                </p>
                                <img src="/diagonalArrow.svg" width="12px" alt="arrow" className="hover:rotate-45 " />
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

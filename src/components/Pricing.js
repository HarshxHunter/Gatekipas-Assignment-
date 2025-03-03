import React from "react";

const pricingPlans = [
    {
        title: "Basic Plan",
        price: "$20",
        period: "/ Month",
        description: "For Small Teams & Offices",
        points: [
            "Visitor Management",
            "Basic Admin Dashboard",
            "Basic Reporting",
            "Email Support",
        ],
        features: [
            "Visitor Management",
            "Basic Reporting",
            "Basic Admin Dashboard",
            "Email Support"
        ],
        limitations: [
            "Host Notifications",
            "Employee Management",
            "Shift Scheduling",
            "Payroll Integration",
            "Reporting (Advanced)",
            "Emergency List"
        ],
        buttonText: "Get Started",
        buttonStyle: "border border-black text-black"
    },
    {
        title: "Standard Plan",
        price: "$50",
        period: "/ Month",
        description: "Best for Growing Businesses",
        points: [
            "Visitor Management",
            "Basic Admin Dashboard",
            "Basic Reporting",
            "Email Support",
        ],
        features: [
            "Visitor & Employee Management",
            "Advanced Reporting",
            "Shift Scheduling & Payroll Integration",
            "Email Support",
            "Host Notifications",
            "Employee Management",
            "Shift Scheduling",
            "Payroll Integration",
            "Reporting (Advanced)",
            "Emergency List"
        ],
        buttonText: "Start Free Trial",
        buttonStyle: "bg-[#33DBA8] text-white"
    }
];

const PricingSection = () => {
    return (
        <section id="pricing" className="py-16 text-center font-manrope">
            <div className="container mx-auto px-6">
                <p className="text-[#4A9D9F] uppercase text-[16px] font-semibold">Pricing</p>
                <h2 className="text-4xl font-semibold mt-2 text-[#0E1010]">Pricing Plans</h2>
                <p className="mt-4 text-gray-600 mx-auto md:px-36 text-center">
                    Choose the perfect plan for your business. Whether you're a small office or a large organization,
                    Gatekipas has a solution tailored to your needs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:px-20 ">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="bg-[#FAFAFA] shadow-lg rounded-xl p-8 text-left border border-gray-200">

                            <div className="flex justify-between items-center">

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-semibold">{plan.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                                </div>

                                <div className="flex items-end">
                                    <span className="text-5xl font-bold">{plan.price}</span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 mt-4 mb-16">
                                {plan.points.map((point, index) => (
                                    <div key={index} className="flex gap-1 ">
                                        <span className="text-gray-600">•</span>
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>

                            <button className={`mt-6 px-6 py-2 rounded-lg w-full ${plan.buttonStyle}`}>{plan.buttonText}</button>

                            <ul className="mt-4 space-y-2">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <img src="/check.svg" width="24px" height="24px" alt="check" className="" />
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                                {plan.limitations && plan.limitations.map((limitation, i) => (
                                    <li key={i} className="flex items-center text-gray-400">
                                        <img src="/cross.svg" width="24px" height="24px" alt="cross" className="" />
                                        <span className="ml-2">{limitation}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;

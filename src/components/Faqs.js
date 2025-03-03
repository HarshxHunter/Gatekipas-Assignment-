import React, { useState } from "react";

const faqs = [
    { question: "Can I switch plans later?", answer: "Yes, you can upgrade or downgrade your plan at any time based on your needs." },
    { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial with full access to all features." },
    { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and wire transfers." },
    { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel anytime, and your subscription will remain active until the end of the billing period." },
    { question: "Is there a setup fee?", answer: "No, there is no setup fee. You can start using Gatekipas immediately." },
    { question: "Is Gatekipas secure?", answer: "Yes, we use industry-standard encryption and security protocols to protect your data." }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-16 text-center font-manrope">
            <div className="container mx-auto px-6">
                <p className="text-[#4A9D9F] uppercase text-[16px] font-semibold">FAQs</p>
                <h2 className="text-4xl font-semibold mt-2 text-[#0E1010]">Frequently Asked Questions</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Everything you could possibly want to know about this amazing product is right here!
                </p>
                <div className="mt-10 max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <button
                                className="w-full text-left py-4 flex justify-between items-center font-semibold text-lg"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? 
                                    <img src="/minus.svg" alt="close" className="" /> : 
                                    <img src="/add.svg" alt="open" className="" />}
                            </button>
                            <div 
                                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-600 pb-4 px-2 text-left">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-100 rounded-xl p-6 mt-12 w-full mx-auto text-center">
                    <div className="flex justify-center -space-x-2 mb-4">
                        <img src="/user1.svg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="/user2.svg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="/user3.svg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Still have questions?</h3>
                    <p className="text-gray-600 mt-2">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                    <button className="mt-4 px-6 py-2 bg-[#33DBA8] text-white rounded-lg font-semibold">
                        Ask Question
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

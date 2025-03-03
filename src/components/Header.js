import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Import icons from lucide-react

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white w-full z-50  font-manrope max-h-[78px]">
            

            <div className="flex items-center gap-4">
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    {menuOpen ? 
                        <img src="/close.svg" alt="close Logo" className="h-[28px]" width="28px" /> : 
                        <img src="/burger-menu.svg" alt="open Logo" className="h-[28px]" width="28px" />}
                </button>


                <img src="/logo.svg" alt="Gatekipas Logo" className="h-[32px]" width="132px" />
            </div>


            <nav className="hidden md:flex gap-10 text-gray-700 text-[15px] font-[600]">
                <a href="#features" className="hover:text-black">Features</a>
                <a href="#pricing" className="hover:text-black">Pricing</a>
                <a href="#faqs" className="hover:text-black">FAQ</a>
                <a href="#blogs" className="hover:text-black">Blogs</a>
                <a href="#contact" className="hover:text-black">Contact</a>
            </nav>


            <div className="flex items-center gap-4">
                <div className="relative cursor-pointer flex items-center gap-1 pr-4 border-r-2">
                    <span className="text-gray-700 text-[15px] font-[500]">EN</span>
                    <img src="/arrowDown.svg" alt="arrow Logo" className="h-2" />
                </div>

                <a href="https://www.google.com/signup" className="text-gray-700 hover:text-black text-[15px] font-[500] hidden md:block">Sign Up</a>

                <button className="bg-[#33DBA8] text-white px-4 py-2 rounded-lg hover:bg-green-500">
                    Demo
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>
            )}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg p-6 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
                <nav className="flex flex-col gap-6 text-gray-700 text-[15px] font-[600]">
                    <a href="https://www.google.com/features" className="hover:text-black" onClick={() => setMenuOpen(false)}>Features</a>
                    <a href="https://www.google.com/pricing" className="hover:text-black" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="https://www.google.com/faq" className="hover:text-black" onClick={() => setMenuOpen(false)}>FAQ</a>
                    <a href="https://www.google.com/blogs" className="hover:text-black" onClick={() => setMenuOpen(false)}>Blogs</a>
                    <a href="https://www.google.com/contact" className="hover:text-black" onClick={() => setMenuOpen(false)}>Contact</a>
                    <a href="https://www.google.com/signup" className="hover:text-black" onClick={() => setMenuOpen(false)}>Sign Up</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

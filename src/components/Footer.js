const Footer = () => {
    return (
        <footer className="w-full bg-white py-8 border-t border-gray-200 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">


                <div className="flex flex-col gap-8 md:gap-16 w-full md:w-auto">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="Gatekipas" className="w-[131px] h-[32px]" />
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                        <a href="#"><img src="/facebook.svg" alt="facebook" className="w-[24px] h-[24px]" /></a>
                        <a href="#"><img src="/instagram.svg" alt="instagram" className="w-[24px] h-[24px]" /></a>
                        <a href="#"><img src="/twitter.svg" alt="twitter" className="w-[24px] h-[24px]" /></a>
                    </div>
                </div>


                <div className="grid grid-cols-2 md:flex gap-10 md:gap-20 w-full md:w-auto">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold text-[#0E1010]">Company</h3>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Features</a>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Pricing</a>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">FAQ</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold text-[#0E1010]">Support</h3>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Help Center</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold text-[#0E1010]">Legal</h3>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Privacy Policy</a>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Terms of Service</a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold text-[#0E1010]">Follow Us</h3>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Twitter</a>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">LinkedIn</a>
                        <a href="#" className="text-gray-600 hover:text-[#4A9D9F]">Facebook</a>
                    </div>
                </div>

                {/* Footer Icon (Hidden on Mobile) */}
                <div className="hidden md:flex items-center justify-center">
                    <img src="/footerIcon.svg" alt="footerIcon" className="w-[68px] h-[68px]" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

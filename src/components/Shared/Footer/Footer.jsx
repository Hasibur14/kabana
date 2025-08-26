import Link from "next/link";
import React from 'react';

const Footer = () => {


    const currentYear = new Date().getFullYear();

    const paymentMethods = [
        { name: 'VISA', bgColor: 'bg-blue-800', textColor: 'text-white' },
        { name: 'MasterCard', bgColor: 'bg-red-600', textColor: 'text-white' },
        { name: 'PayPal', bgColor: 'bg-yellow-500', textColor: 'text-black' },
        { name: 'Apple Pay', bgColor: 'bg-black', textColor: 'text-white' },
        { name: 'Google Pay', bgColor: 'bg-white', textColor: 'text-black' },
        { name: 'Amazon Pay', bgColor: 'bg-orange-500', textColor: 'text-white' },
        { name: 'bkash', bgColor: 'bg-red-500', textColor: 'text-white' },
        { name: 'Nagad', bgColor: 'bg-green-500', textColor: 'text-white' },
        { name: 'Rocket', bgColor: 'bg-blue-500', textColor: 'text-white' },
        { name: 'Upay', bgColor: 'bg-purple-500', textColor: 'text-white' },

    ];



    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top section with company info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-4">KABANA</h2>
                        <p className="text-sm mb-2">An Manufacturing Studio</p>
                        <p className="text-sm mb-2">29 SE 2nd Ave, Miami Florida 3333, United States</p>
                        <p className="text-sm mb-2">info@kabana.com</p>
                        <p className="text-sm mb-4">(+92) 3942 7879</p>

                        {/* Payment channels */}
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-white mb-2">PAYMENT CHANNELS</h3>
                            <div className="flex items-center">
                                {
                                    paymentMethods.map((method) => (
                                        <div
                                            key={method.name}
                                            className={`${method.bgColor} ${method.textColor} px-3 py-1 rounded text-xs font-semibold mr-2`}
                                        >
                                            {method.name}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Shopping links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase">Shopping</h3>
                        <ul className="space-y-2">
                            {['Wishlist', 'Cart', 'Shop by Category', 'Recent View', 'Site Guide'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase">Information</h3>
                        <ul className="space-y-2">
                            {['Track Order', 'Shipping & Returns', 'About Us', 'Help', 'Gift Cards'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase">Account</h3>
                        <ul className="space-y-2">
                            {['My Account', 'My Orders'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* Divider */}
                <div className="border-t border-gray-500 border-opacity-20 my-8"></div>

                {/* Bottom section with copyright and policies */}
                <div className="flex flex-col md:flex-row justify-between items-center text-md">
                    <div className="mb-4 md:mb-0 text-gray-300">
                        © {currentYear} Kabana. All rights reserved.
                    </div>
                    <div className="text-gray-300">
                        Designed & Developed by{' '}
                        <Link
                            href="https://360dsoul.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sky-500 hover:text-sky-400 transition-colors duration-300"
                        >
                            360D Soul Limited.
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
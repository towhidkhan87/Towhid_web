import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="w-full bg-white z-50 shadow-xl border-b border-gray-300">
                <div className="flex justify-between items-center w-11/12 mx-auto py-4">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <Link to="/home" className="flex items-center gap-3">
                            <img className="w-16 h-16 rounded-full" src="/public/Towhid_favicon.png" alt="Towhid's Logo" />
                            <p className="text-xl font-bold text-gray-700">Towhid's Portfolio</p>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex justify-between items-center gap-5 lg:gap-10">
                        <nav className="hidden lg:flex gap-10">
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/home'}>Home</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/about'}>About Me</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/projects'}>Projects</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/services'}>Services</Link></p>
                            <p className="hover:text-red-500 cursor-pointer"><Link to={'/contact'}>Contact</Link></p>
                        </nav>

                        {/* Call-to-Action Button */}
                        <button
                            className="rounded-lg bg-red-500 px-6 py-3 text-white shadow-lg transform hover:translate-y-1 hover:shadow-sm transition hover:bg-red-600 font-semibold">
                            <Link to={'/contact'}>Hire Me</Link>
                        </button>

                        {/* Mobile Menu Icon */}
                        <FaBarsStaggered className="text-2xl lg:hidden cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
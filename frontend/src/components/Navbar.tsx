"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons
import Button from './Forms/Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-2 border-[#333] p-4 rounded-lg sticky top-5 z-[50] backdrop-blur-md bg-black/60">
            <div className="flex justify-between items-center">
                
                <h1 className="text-2xl text-white">
                    <span className='text-primary'>Veil</span> Assets
                </h1>
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <nav className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent rounded-lg md:flex md:items-center 
                    ${isOpen ? "block" : "hidden"} transition-all ease-in-out duration-300`}
                >
                    <ul className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-10 p-4 md:p-0">
                        <li>
                            <a href="#" className="text-white hover:text-primary transition-all duration-100">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-primary transition-all duration-100">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-primary transition-all duration-100">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className={`hidden md:block ${isOpen ? "hidden" : "block"}`}>
                    <Button label="Connect Wallet" size='sm' />
                </div>
            </div>
        </header>
    );
}

export default Navbar;

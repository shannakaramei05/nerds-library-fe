"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-blue-600">
                    📚 Nerd's Library
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 ">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/books" className="hover:text-blue-600">Books</Link>
                    <Link href="/about" className="hover:text-blue-600">About</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full">
                    <nav className="flex flex-col space-y-4 py-4 px-6 items-center">
                        <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/books" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Books</Link>
                        <Link href="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}

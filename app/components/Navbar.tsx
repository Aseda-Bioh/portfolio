"use client"
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-black border-b border-cyan-400/20">
            <div className="flex justify-between">
                <a href="#" className="font-bold text-cyan-400">Nana Kwabena Aseda Bioh</a>

                <div className="hidden md:flex gap-6">
                    <a href="#about" className="hover:text-cyan-400">About</a>
                    <a href="#skills" className="hover:text-cyan-400">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400">Projects</a>
                    <a href="#education" className="hover:text-cyan-400">Education</a>
                    <a href="#contact" className="hover:text-cyan-400">Contact</a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    <Menu size={24} />
                </button>
            </div>

            {isOpen && (
                <div className="flex flex-col gap-4 md:hidden py-4 relative z-50">
                    <a href="#about" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#skills" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#projects" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#education" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Education</a>
                    <a href="#contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>Contact</a>
                </div>
            )}

            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
            )}
        </nav>
    )
}
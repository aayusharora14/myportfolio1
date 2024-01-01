"use client";
import React from "react";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="footer border z-10 bg-[#0C1D36] border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-12 flex justify-between">
                <span>
                    <Image src="/images/Logo.png" alt="Logo" width={190} height={80} />
                </span>
                <p className="text-white">This Portfolio was last updated on 01/01/2024</p>
            </div>
        </footer>
    );
};

export default Footer;
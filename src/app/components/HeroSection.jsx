// Import necessary libraries and components
"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import SocialIcons from './SocialIcons';

// Define the HeroSection component
export const HeroSection = () => {
    // Function to handle the "Get in Touch" button click
    const handleGetInTouch = () => {
        const emailAddress = 'aayusharora2510@gmail.com'; // Replace with your actual email address
        const mailtoLink = `mailto:${emailAddress}`;
        window.location.href = mailtoLink;
    };

    // Function to handle the download of the resume PDF
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/aayushresume.pdf'; // Replace with the correct path to your PDF file
        link.download = 'aayushresume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Render the component
    return (
        <section className="mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-[#0C1D36] mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                        Hello, I am Aayush <br />
                        <TypeAnimation
                            sequence={[
                                "Software Engineer",
                                1000,
                                "Web Developer",
                                1000,
                                "Java Programmer",
                                1000,
                                "C Programmer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>

                    <p className="text-[#ADB2BE] text-base sm:text-lg mb-6 lg:text-xl">
                        My portfolio showcases a blend of technical expertise and a drive for creating impactful solutions. Committed to delivering innovative projects and continuously expanding my skill set.
                    </p>

                    <div className="flex flex-col lg:flex-row">
                        <button
                            className='px-6 py-3 w-full sm:w-fit rounded-full mb-3 lg:mb-0 lg:mr-4 bg-[#0C1D36] text-white hover:bg-slate-200 hover:text-black'
                            onClick={handleGetInTouch}
                        >
                            Get in Touch
                        </button>
                        <button
                            className='px-6 py-3 w-full sm:w-fit rounded-full bg-[#F2CD46] text-[#0C1D36] hover:bg-slate-400 border border-[#0C1D36]'
                            onClick={handleDownloadResume}
                        >
                            Download Resume
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full overflow-hidden w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/portfolio-dp.jpeg"
                            alt="portfolio dp"
                            className="object-cover w-full h-full"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-12">
                <SocialIcons />
            </div>
        </section>
    );
};

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section id="about">
            <section className="text-white bg-[#233B4F] mt-12 w-full">
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 container mx-auto">
                    <div className="mb-4">
                        <Image
                            src="/images/Desk.gif"  // Make sure to replace 'Desk.gif' with the actual file name
                            alt="Desk"
                            width={500}  // Adjust width based on your design
                            height={500}  // Adjust height based on your design
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-[#F2CD46] mb-4">About Me</h2>
                        <p className="text-base lg:text-lg">





                            I am a proactive Computer Science student at Manipal University with a strong foundation in programming languages like C, JavaScript, React, Python, and Java. My practical experiences include a MERN Stack training program, contributing to many projects.
                            <br></br>
                            My projects not only showcase my technical proficiency but also reflects my keen interest in the finance & IT sector and my ability to leverage technology for innovative solutions.

                            Beyond my academic and professional pursuits, I actively participate in hackathons.

                            <br>
                            </br>
                            I am eager to bring my skills, passion, and proactive mindset to contribute to challenging projects and foster a collaborative work environment.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default AboutSection;



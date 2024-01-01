"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";


import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: " Portfolio Website",
        description: "Tech Stack: Next.js,React.js Javascript (! Code Not Revealed Yet you will be Redirected to my Github)",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/aayusharora14/",
        previewUrl: "https://drive.google.com/file/d/1SZPX1a3fYKu6nRnnKmx59qEE4MvmrkXq/view?usp=sharing",
    },
    {
        id: 2,
        title: "Youtube Clone Fullstack",
        description: "Tech Stack: React.js, Node.js, MongoDB, Javascript",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/aayusharora14/youtubeclone1.0",
        previewUrl: "https://drive.google.com/file/d/1PifYRWOU0j6tuPfLW7Hpa0zJoqQxN9pN/view?usp=sharing",
    },
    {
        id: 3,
        title: "Property Trading Website Main Page",
        description: "Tech Stack: React.js, Javascript",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/aayusharora14/Property-Trading-Website-Frontend",
        previewUrl: "https://drive.google.com/file/d/1nv-zSbV8fe3nkRTIX_FhSkgsY3MR7KOg/view?usp=sharing",

    },
    {
        id: 4,
        title: "Investment Website UI",
        description: "Tech Stack: HTML, CSS, Javascript",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/aayusharora14/Investment-Wesbite-FrontPage_BasicUI",
        previewUrl: "https://drive.google.com/file/d/1oIVscqJbRCAG-IofuWFAgBYdX41XEh7H/view?usp=sharing",
    },
    {
        id: 5,
        title: "Car Accessories E-Commerce Website",
        description: "Tech Stack: HTML, CSS:Bootstrap, Javascript, PHP, SQL",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/aayusharora14/Online-Car-Accessories-Ecommerce-Service-provider",
        previewUrl: "https://drive.google.com/file/d/1GDp3jkYLjSysvUbgLRwzad6gOjZD3JWt/view?usp=sharing",
    },
    {
        id: 6,
        title: "Cab Booking Website with live Driver Face Verification",
        description: "Tech Stack: CSS:Bootstrap,Javascript, FACEAPI",
        image: "/images/projects/6.jpeg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/aayusharora14/INCODE-HACKATHON-CAB-BOOKING-SYSTEM-WITH-LIVE-DRIVER-FACE-VERIFICATION",
        previewUrl: "https://drive.google.com/file/d/1Q4_SPDD2Z64tPQxSRDkdEEyO_hlT7Zdd/view?usp=sharing",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects">
            <div className="flexColStart r-head">
                <span className="primaryTexta">My Projects</span>
                <span className="orangeText">Every Project is a Unique Piece of Development</span>

            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
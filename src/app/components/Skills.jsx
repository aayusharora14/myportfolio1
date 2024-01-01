// Skills.jsx
"use client";
// components/TechStack.js
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

const icons = [
    'https://img.icons8.com/color/48/000000/c-programming.png',
    'https://img.icons8.com/color/48/000000/python.png',
    'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png',
    'https://img.icons8.com/color/48/000000/html-5.png',
    'https://img.icons8.com/color/48/000000/javascript.png',
    'https://img.icons8.com/color/48/000000/sql.png',
    'https://img.icons8.com/color/48/000000/php.png',
    'https://img.icons8.com/color/48/000000/react-native.png',
    'https://img.icons8.com/color/48/000000/css3.png',
];

const TechStack = () => {
    const [isHovered, setHovered] = useState(false);

    const { opacity, transform, color } = useSpring({
        opacity: 1,
        transform: `translateX(${isHovered ? '-10px' : '0'}) rotate(${isHovered ? '20deg' : '0'}) scale(${isHovered ? 1.2 : 1})`,
        color: isHovered ? '#ff7b00' : '#000000',
        config: { tension: 150, friction: 10, mass: 1 },
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setHovered(!isHovered);
        }, 5000); // Change the interval duration as needed

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div
            className="tech-stack-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="heading"><h3 class="animate-charcter"> Tech Stack</h3></div>
            <div className="icons-container">
                {icons.map((icon, index) => (
                    <animated.div
                        key={index}
                        style={{ opacity, transform, color }}
                        className="icon"
                    >
                        <img src={icon} width="45" height="45" alt={`Tech Icon ${index + 1}`} />
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;

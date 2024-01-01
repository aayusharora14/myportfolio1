import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faWhatsapp, faSnapchat } from '@fortawesome/free-brands-svg-icons';


const SocialIcons = () => {
    const socialMediaLinks = [
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/aayusharora14' },
        { icon: faSnapchat, link: 'https://t.snapchat.com/hr8nKQpa' },
        { icon: faGithub, link: 'https://github.com/aayusharora14' },
        { icon: faInstagram, link: 'https://www.instagram.com/arora__aayush' },
        { icon: faWhatsapp, link: 'https://wa.me/+919050482008' },

    ];

    return (
        <div className="flex space-x-4">
            {socialMediaLinks.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={item.icon} size="2x" className="text-[#0C1D36] hover:text-[#ADB2BE] mx-4" />
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;

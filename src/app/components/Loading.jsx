import React from 'react';

const Loading = () => {
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
            <div className="typewriter">
                <div className="slide"><i></i></div>
                <div className="paper"></div>
                <div className="keyboard"></div>

                {/* Dribbble link */}
                <a className="dribbble" href="https://dribbble.com/shots/8184246-Typewriter" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg" alt="Dribbble link" />
                </a>
                <strong>
                    <h6 className='text-black'>
                        &nbsp;
                        Loading...
                    </h6>
                </strong>
            </div>
        </div>
    );
}

export default Loading;

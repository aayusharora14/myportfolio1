import React from 'react';

const Loading = () => {
    const styles = `
    .typewriter {
        --blue: #5C86FF;
        --blue-dark: #275EFE;
        --key: #fff;
        --paper: #EEF0FD;
        --text: #D3D4EC;
        --tool: #FBC56C;
        --duration: 3s;
        position: relative;
        -webkit-animation: bounce var(--duration) linear infinite;
        animation: bounce var(--duration) linear infinite;
    
    }
    
    .typewriter .slide {
        width: 92px;
        height: 20px;
        border-radius: 3px;
        margin-left: 14px;
        transform: translateX(14px);
        background: linear-gradient(var(--blue), var(--blue-dark));
        -webkit-animation: slide var(--duration) ease infinite;
        animation: slide var(--duration) ease infinite;
    }
    
    .typewriter .slide:before,
    .typewriter .slide:after,
    .typewriter .slide i:before {
        content: "";
        position: absolute;
        background: var(--tool);
    }
    
    .typewriter .slide:before {
        width: 2px;
        height: 8px;
        top: 6px;
        left: 100%;
    }
    
    .typewriter .slide:after {
        left: 94px;
        top: 3px;
        height: 14px;
        width: 6px;
        border-radius: 3px;
    }
    
    .typewriter .slide i {
        display: block;
        position: absolute;
        right: 100%;
        width: 6px;
        height: 4px;
        top: 4px;
        background: var(--tool);
    }
    
    .typewriter .slide i:before {
        right: 100%;
        top: -2px;
        width: 4px;
        border-radius: 2px;
        height: 14px;
    }
    
    .typewriter .paper {
        position: absolute;
        left: 24px;
        top: -26px;
        width: 40px;
        height: 46px;
        border-radius: 5px;
        background: var(--paper);
        transform: translateY(46px);
        -webkit-animation: paper var(--duration) linear infinite;
        animation: paper var(--duration) linear infinite;
    }
    
    .typewriter .paper:before {
        content: "";
        position: absolute;
        left: 6px;
        right: 6px;
        top: 7px;
        border-radius: 2px;
        height: 4px;
        transform: scaleY(0.8);
        background: var(--text);
        box-shadow: 0 12px 0 var(--text), 0 24px 0 var(--text), 0 36px 0 var(--text);
    }
    
    .typewriter .keyboard {
        width: 120px;
        height: 56px;
        margin-top: -10px;
        z-index: 1;
        position: relative;
    }
    
    .typewriter .keyboard:before,
    .typewriter .keyboard:after {
        content: "";
        position: absolute;
    }
    
    .typewriter .keyboard:before {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 7px;
        background: linear-gradient(135deg, var(--blue), var(--blue-dark));
        transform: perspective(10px) rotateX(2deg);
        transform-origin: 50% 100%;
    }
    
    .typewriter .keyboard:after {
        left: 2px;
        top: 25px;
        width: 11px;
        height: 4px;
        border-radius: 2px;
        box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        -webkit-animation: keyboard var(--duration) linear infinite;
        animation: keyboard var(--duration) linear infinite;
    }
    
    @-webkit-keyframes bounce {
    
        85%,
        92%,
        100% {
            transform: translateY(0);
        }
    
        89% {
            transform: translateY(-4px);
        }
    
        95% {
            transform: translateY(2px);
        }
    }
    
    @keyframes bounce {
    
        85%,
        92%,
        100% {
            transform: translateY(0);
        }
    
        89% {
            transform: translateY(-4px);
        }
    
        95% {
            transform: translateY(2px);
        }
    }
    
    @-webkit-keyframes slide {
        5% {
            transform: translateX(14px);
        }
    
        15%,
        30% {
            transform: translateX(6px);
        }
    
        40%,
        55% {
            transform: translateX(0);
        }
    
        65%,
        70% {
            transform: translateX(-4px);
        }
    
        80%,
        89% {
            transform: translateX(-12px);
        }
    
        100% {
            transform: translateX(14px);
        }
    }
    
    @keyframes slide {
        5% {
            transform: translateX(14px);
        }
    
        15%,
        30% {
            transform: translateX(6px);
        }
    
        40%,
        55% {
            transform: translateX(0);
        }
    
        65%,
        70% {
            transform: translateX(-4px);
        }
    
        80%,
        89% {
            transform: translateX(-12px);
        }
    
        100% {
            transform: translateX(14px);
        }
    }
    
    @-webkit-keyframes paper {
        5% {
            transform: translateY(46px);
        }
    
        20%,
        30% {
            transform: translateY(34px);
        }
    
        40%,
        55% {
            transform: translateY(22px);
        }
    
        65%,
        70% {
            transform: translateY(10px);
        }
    
        80%,
        85% {
            transform: translateY(0);
        }
    
        92%,
        100% {
            transform: translateY(46px);
        }
    }
    
    @keyframes paper {
        5% {
            transform: translateY(46px);
        }
    
        20%,
        30% {
            transform: translateY(34px);
        }
    
        40%,
        55% {
            transform: translateY(22px);
        }
    
        65%,
        70% {
            transform: translateY(10px);
        }
    
        80%,
        85% {
            transform: translateY(0);
        }
    
        92%,
        100% {
            transform: translateY(46px);
        }
    }
    
    @-webkit-keyframes keyboard {
    
        5%,
        12%,
        21%,
        30%,
        39%,
        48%,
        57%,
        66%,
        75%,
        84% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        9% {
            box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        18% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 2px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        27% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 12px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        36% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 12px 0 var(--key), 60px 12px 0 var(--key), 68px 12px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        45% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        54% {
            box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        63% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 12px 0 var(--key);
        }
    
        72% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 2px 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        81% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 12px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    }
    
    @keyframes keyboard {
    
        5%,
        12%,
        21%,
        30%,
        39%,
        48%,
        57%,
        66%,
        75%,
        84% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        9% {
            box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        18% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 2px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        27% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 12px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        36% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 12px 0 var(--key), 60px 12px 0 var(--key), 68px 12px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        45% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        54% {
            box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        63% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 12px 0 var(--key);
        }
    
        72% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 2px 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    
        81% {
            box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 12px 0 var(--key), 52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
        }
    }
    
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    
    * {
        box-sizing: inherit;
    }
    
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    body {
        min-height: 100vh;
        display: flex;
        font-family: "Roboto", Arial;
        justify-content: center;
        align-items: center;
        background: #fff;
    }
    
    body .dribbble {
        position: fixed;
        display: block;
        right: 20px;
        bottom: 20px;
    }
    
    body .dribbble img {
        display: block;
        height: 28px;
    }
    
    h6 {
        text-align: center;
    }
        
    `;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <style>{styles}</style>
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

import React from "react";
import './header.css';
import me from '../../assets/me.png'


const Header = () => {
    return (
        <div className="web_header section padding" id="home">
            <div className="web_header-content">
                <h1 className="main_text-first"> Karalyn </h1>
                <h1 className="main_text-last"> Sawchuk </h1>

            <div className="web_header-content_next">
                <div className="web_header-content_next-arrow">
                    <svg width="51" height="113" viewBox="0 0 51 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="check" d="M4.60817 101.432L21.4516 109.512L29.2692 94.1457" stroke="white" strokeWidth="5"/>
                        <path id="squiggle" d="M34.9137 2C34.9137 2 60.5641 51.9267 40.2436 53.9928C28.0337 55.2342 25.5676 38.8169 13.3402 37.7609C-13.8029 35.4167 21.0738 107 21.0738 107" stroke="white" strokeWidth="5"/>
                    </svg>
                </div>
                <button type="button"> About Me </button>
            </div>

            </div>
            <div className="web_header-image">
                <img src={me} alt="me smiling"/>
            </div>
        </div>
    )
}

export default Header
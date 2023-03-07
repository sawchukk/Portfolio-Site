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
                    <button type="button"> About Me </button>
                </div>

            </div>
            <div className="web_header-image">
                    <img src={me} alt="me smiling"/>
                </div>


            Header
        </div>
    )
}

export default Header
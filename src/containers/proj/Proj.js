import React from "react";
import './proj.css';
import projPreview from './../../assets/projPreview.png'

const Proj = () => {
    return(
        <div className="web_proj" id="proj">
            <div className="web_proj-content">
                <h1> Projects </h1>
                <hr></hr>
                <div className="web_proj-content_sub">
                    <div className="web_proj-content_sub-name">
                        <h2> project1 </h2>
                    </div>
                    <div className="web_proj-content_sub-text">
                        <p> type </p>
                    </div>
                </div>



            </div>
            <div className="web_proj-image">
                <img src={projPreview} alt="project preview"/>

            </div>




        </div>
    )
}

export default Proj
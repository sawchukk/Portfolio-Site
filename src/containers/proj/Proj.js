import React from "react";
import './proj.css';
import { ProjSubsection } from './../../components';
import projPreview from './../../assets/projPreview.png'

const Proj = () => {
    return(
        <div className="web_proj" id="proj">
            <div className="web_proj-content">
                <h1> Projects </h1>
                <hr></hr>
                <ProjSubsection />
                <ProjSubsection />
                <ProjSubsection />
                <ProjSubsection />
                <p> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>

            </div>
            <div className="web_proj-image">
                <img src={projPreview} alt="project preview"/>

            </div>

        </div>
    )
}

export default Proj
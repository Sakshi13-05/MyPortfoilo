import React from "react";
import certificate1 from "../Components/image.jpg";
import certificate2 from "../assets/60.png";
import certificate3 from "../assets/61.jpg";
import "./Certificate.css";
import "./Common.css";

function Certificate(props) {
    

    return (
        <div className='common' theme={props .dabaa? "dark":"light"}>

        <div className="certificate-container">
            
            <div className="scroll-wrapper" >
                <div className="certificate-card">
                    <img src={certificate1} alt="Certificate 1" className="scroll-image" />
                    <h2 className="head">SPIT Hackathon
                    </h2>
                </div>
                <div className="certificate-card">
                    <img src={certificate2} alt="Certificate 2" className="scroll-image" />
                    <h2 className="head">
                        Smart India Hackathon
                    </h2>
                </div>
                <div className="certificate-card">
                    <img src={certificate3} alt="Certificate 2" className="scroll-image" />
                    <h2 className="head">
                        Java Programming
                    </h2>
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default Certificate;

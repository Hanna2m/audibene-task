import React from "react";


const Advertisement = ({img, title, offer}) => (
    <div className="advert-card">
        <p id="header-advert">Advertisement</p>
        <img className="advert-img" src={img} />
        <div id="advert-hover">
                <p>{offer}</p>
                <button id="btn-advert">Register here for free </button>
        </div>
        <div id="body-advert">
            <h2 id="title-advert">{title}</h2>
            <p>{offer}</p>
            <button id="btn-advert">Register here for free </button>
        </div>
        
    </div>
)

export default Advertisement;
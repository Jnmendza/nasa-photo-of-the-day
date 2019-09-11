import React from 'react';


const ApodCard = props => {
    return(
        <div className="card-container">
            <h2> Title: {props.title} </h2>
            <p>{props.date}</p>
            <img src={props.url} alt="Space"/>

        </div>

    )
}


export default ApodCard;
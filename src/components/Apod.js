import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./ApodCard"

export default function Apod() {


    const [photo, setPhoto] = useState({undefined});

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=LuCT1UiKXdbUhfBK96hFDSx2J4WnHhl5dB8bzEQf`)
        .then(response => setPhoto(response.data));
        // .catch(error => {
        //     console.log(`APOD not returned`, error);
        //   });
    },[]);
    console.log(photo)
    return (
        <div className="photo">
            
            <ApodCard                    
                    title={photo.title}
                    date={photo.date}
                    explanation={photo.explanation}
                    url={photo.url}
                />

        </div>
    );
}
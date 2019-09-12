import React, { useState, useEffect } from "react";
import axios from "axios";
import ApodCard from "./ApodCard"
import styled from 'styled-components';



const ApodContainer = styled.div`
    display: flex;
    margin: auto;
    background: rgba(128, 128, 128, 0.5);
    width: 80%;

`;

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
        <ApodContainer>
            
            <ApodCard                    
                    title={photo.title}
                    date={photo.date}
                    explanation={photo.explanation}
                    url={photo.url}
                />

        </ApodContainer>
    );
}
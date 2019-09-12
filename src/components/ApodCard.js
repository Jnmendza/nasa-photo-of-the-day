import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`

`;

const Title = styled.h1`
    color: white;
    width: 50%;
    margin: 0 auto;
    text-align: center;

`;

const Date = styled(Title)`
    font-size: 1rem;
`;

const Image = styled.img`
    max-width:100%;
    height:auto;
`;
const ImgContainer = styled.div`
    padding: 20px;
`;

const Text = styled.p`
    color: white;
    font-family: helvetica;
    font-size: 0.8rem;
    margin: 0 auto;
    width: 70%;
    padding: 20px;

`;

const ApodCard = props => {
    return(
        <CardContainer>
            <Title> Title: {props.title} </Title>
            <Date>{props.date}</Date>

            <ImgContainer>
                <Image src={props.url} alt="Space" />
            </ImgContainer>

            <Text>{props.explanation}</Text>

        </CardContainer>

    )
}


export default ApodCard;
import React from 'react'
import styled from 'styled-components'

const DisplayCards = styled.section`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;

const DisplayCard = styled.div`
    height: 300px;
    width: 25%;
    background: #202020;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DisplayHeading = styled.h2`
    font-size: 2.4rem;
    color: white;
    text-transform: uppercase;
    padding: 1rem 0;
    margin: 0;
`;

const DisplayValue = styled.div`
    color: white;
    font-size: 4rem;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Display = props => {
    return (
        <DisplayCards>
            <DisplayCard>
                <DisplayHeading>Strikes</DisplayHeading>
                <DisplayValue>{props.strikes}</DisplayValue>
            </DisplayCard>
            <DisplayCard>
                <DisplayHeading>Balls</DisplayHeading>
                <DisplayValue>{props.balls}</DisplayValue>
            </DisplayCard>
            <DisplayCard>
                <DisplayHeading>Fouls</DisplayHeading>
                <DisplayValue>{props.fouls}</DisplayValue>
            </DisplayCard>
        </DisplayCards>
    )
}

export default Display

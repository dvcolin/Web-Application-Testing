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
    width: 30%;
    background: #202020;
`;

const DisplayHeading = styled.h2`
    font-size: 2.4rem;
    color: white;
    text-transform: uppercase;
`;

const Display = () => {
    return (
        <DisplayCards>
            <DisplayCard>
                <DisplayHeading>Strikes</DisplayHeading>
            </DisplayCard>
            <DisplayCard>
                <DisplayHeading>Balls</DisplayHeading>
            </DisplayCard>
        </DisplayCards>
    )
}

export default Display

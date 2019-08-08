import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
    width: 60%;
    margin: 2.5rem auto;
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    font-size: 2rem;
    background: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem 1.5rem;

    :hover {
        background: gray;
        cursor: pointer;
    }
`;


const Dashboard = props => {
    return (
        <Buttons>
            <Button onClick={props.addStrike}>Strike</Button>
            <Button onClick={props.addBall}>Ball</Button>
            <Button onClick={props.addFoul}>Foul</Button>
            <Button onClick={props.resetValues}>Hit</Button>
        </Buttons>
    )
}

export default Dashboard

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
`;


const Dashboard = () => {
    return (
        <Buttons>
            <Button>Strike</Button>
            <Button>Ball</Button>
            <Button>Foul</Button>
            <Button>Hit</Button>
        </Buttons>
    )
}

export default Dashboard

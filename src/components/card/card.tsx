import { useState } from 'react'
import { CardProps, StyledCardProps } from './interfaces-card'
import { BackCard } from '../back-card/back-card'
import { FrontCard } from '../front-card/front-card'
import styled from 'styled-components'

const StyledCard = styled.li<StyledCardProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #ffffffeb;
    width: 400px;
    height: 350px;
    border-radius: 12px;
    // font-family: 'league-spartan-medium';
    box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%),0 1px 3px 1px rgb(60 64 67 / 15%);
    perspective: 600px;
    transition: transform 1s;
    transform-style: preserve-3d;
    transform:${props => props.isFlipped ? ' rotateY(180deg)' : ''};
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 1px #ae84d1, 0 1px 3px 1px #ae84d1;
    }
    @media (max-width: 500px) {
        width: 330px;
    }
    @media (min-width: 800px) {
        width: 290px;
`

export const Card: React.FC<CardProps> = ({ application }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <StyledCard onClick={() => setIsFlipped(!isFlipped)} isFlipped={isFlipped}>
            <FrontCard application={application} />
            <BackCard application={application} />
        </StyledCard>
    )
}
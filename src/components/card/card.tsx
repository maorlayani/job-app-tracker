import { useState } from 'react'
import { CardProps, StyledCardProps } from './interfaces-card'
import { BackCard } from '../back-card/back-card'
import { FrontCard } from '../front-card/front-card'
import styled from 'styled-components'

const StyledCard = styled.li<StyledCardProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    width:  230px;
    height: 350px;
    border-radius: 6px;
    box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%),0 1px 3px 1px rgb(60 64 67 / 15%);
    perspective: 600px;
    transition: transform 1s;
    transform-style: preserve-3d;
    color: var(--primary-text);
    transform:${props => props.isFlipped ? ' rotateY(180deg)' : ''};
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 1px var(--accent), 0 1px 3px 1px var(--accent);
    }
    @media (max-width: 500px) {
        width: 250px;
    }
    @media (min-width: 600px) {
        width: 270px;
    }
    @media (min-width: 800px) {
        width: 230px;
    }
    @media (min-width: 900px) {
        width: 270px;
    }
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
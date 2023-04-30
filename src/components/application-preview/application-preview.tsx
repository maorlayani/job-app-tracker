import React, { useState } from 'react'
import { ApplicationPreviewProps, PreviewLIProps } from './interfaces-application-preview'
import { BackCard } from '../back-card/back-card'
import { FrontCard } from '../front-card/front-card'
import styled from 'styled-components'

const PreviewLI = styled.li<PreviewLIProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #ffffffeb;
    width: 400px;
    height: 350px;
    border-radius: 12px;
    font-family: 'league-spartan-medium';
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
        width: 300px;
    }
    @media (min-width: 1270px) {
        width: 400px;
    }
`

export const ApplicationPreview: React.FC<ApplicationPreviewProps> = ({ application }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <PreviewLI onClick={() => setIsFlipped(!isFlipped)} isFlipped={isFlipped}>
            <FrontCard application={application} />
            <BackCard />
        </PreviewLI>
    )
}
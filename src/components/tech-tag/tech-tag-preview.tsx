import { useState } from "react"
import styled from "styled-components"
import { Technology } from "../../models/interfaces"

const StyledTechTagPreview = styled.div<StyledTechTagPreviewProps>`
    display: flex;
    align-items: center;
    border-radius: 9px;
    background-color: ${props => props.isSelected ? 'var(--primary-full-button-hover)' : 'var(--white-background)'};
    width: fit-content;
    padding: 2px;
    color: ${props => props.isSelected ? 'var(--white-background)' : 'var(--primary-button)'};
    border: 1px solid var(--primary-button);
    &:hover{
            cursor: pointer;
        }
`
const TechName = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 0.3em 0.7em 0.3em 0;
`
const TechLogo = styled.img`
    width: 24px;
    height: 24px;
    padding: 0 .3em;
`
interface StyledTechTagPreviewProps {
    isSelected: boolean
}

interface TechTagPreviewProps {
    tech: Technology,
    setApplicationTechnologies: (selectedTech: Technology) => void,
    istoggleDisable?: boolean
}

export const TechTagPreview: React.FC<TechTagPreviewProps> = ({ tech, setApplicationTechnologies, istoggleDisable }) => {
    const [isSelected, setIsSelected] = useState(false)

    const toggleTechTag = () => {
        if (istoggleDisable) return
        setIsSelected(!isSelected)
        setApplicationTechnologies(tech)
    }

    return (
        <StyledTechTagPreview
            isSelected={isSelected}
            onClick={toggleTechTag}>
            <TechLogo src={tech.logoUrl} />
            <TechName>{tech.name}</TechName>
        </StyledTechTagPreview>
    )
}
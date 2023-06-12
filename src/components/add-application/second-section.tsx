import styled from "styled-components"
import { Register, Technology } from "../../models/interfaces"
import { TechTagList } from "../tech-tag/tech-tag-list"

const StyledSecondSection = styled.div`
    display: flex;
    align-items: flex-start;
`
const TechTagContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    gap: 20px;  
    width: 100%;
`

interface SecondSectionProps {
    ApplicationTechnologies: Technology[],
    setTechList: (techList: Technology[]) => void
}

export const SecondSection: React.FC<SecondSectionProps> = ({ ApplicationTechnologies, setTechList }) => {
    return (
        <StyledSecondSection>
            <TechTagContainer>
                <TechTagList ApplicationTechnologies={ApplicationTechnologies} setTechList={setTechList} />
            </TechTagContainer>
        </StyledSecondSection>
    )
}
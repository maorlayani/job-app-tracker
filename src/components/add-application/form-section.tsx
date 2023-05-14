import styled from "styled-components"
import { FormSectionTxt } from "./form-sections-bar"

interface FormSectionProps {
    isSelected: boolean,
    beforeContent: FormSectionTxt,
    idx: string,
    sectionClickHandler: (section: FormSectionTxt) => void
}
const StyledFormSection = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin-inline-end: 15px;
`
interface FormSectionLabelProps {
    isSelected: boolean,
    beforeContent: FormSectionTxt,
    idx: string
}

const FormSectionLabel = styled.div<FormSectionLabelProps>`
    color: ${props => props.isSelected ? '#ae84d1' : '#cfcfcf'};
    &:before {
        content: "${props => props.idx + '.' + props.beforeContent}";
    }
    @media (max-width: 500px) {
        &:before {
            content: "${props => props.idx}";
        }
    }   
`

interface FormSectionBarProps {
    isSelected: boolean,
}
const FormSectionBar = styled.div<FormSectionBarProps>`
    width: 100%;
    background-color: ${props => props.isSelected ? '#ae84d1' : '#cfcfcf'};
    height: 10px;
    border-radius: 3px;
`
export const FormSection: React.FC<FormSectionProps> = ({ idx, isSelected, beforeContent, sectionClickHandler }) => {
    return (
        <StyledFormSection onClick={() => { sectionClickHandler(beforeContent) }}>
            <FormSectionLabel idx={idx} beforeContent={beforeContent} isSelected={isSelected}></FormSectionLabel>
            <FormSectionBar isSelected={isSelected}></FormSectionBar>
        </StyledFormSection>
    )
}
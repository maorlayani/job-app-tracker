import styled from "styled-components"
import { Register } from "../../models/interfaces"
import { trackerService } from "../../services/tracker.service"
import { FormTextInput } from "../inputs/form-text-input"
import { StyledLabelTitle } from "../styles/input.styled"

interface StyledContactInfoProps {
    className?: string
}

const StyledContactInfo = styled.div<StyledContactInfoProps>`
`

const StyledContactInputContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-block-end: 15px;

`
const StyledContactInput = styled(FormTextInput)`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-block-start: 10px;
    label {
        width: 65px;
    }
    @media (min-width: 800px) {
        width: 48%;
    }
`
export interface ContactInfoProps {
    register: Register,
    className?: string
}
export const ContactInfo: React.FC<ContactInfoProps> = ({ register, className }) => {
    return (
        <StyledContactInfo className={className}>
            <StyledLabelTitle as="span">Contact info</StyledLabelTitle>
            <StyledContactInputContainer>
                {trackerService.getContactInfoInputsData().map(input => {
                    return <StyledContactInput
                        key={input.name}
                        type={input.type}
                        labelTxt={input.labelTxt}
                        name={input.name}
                        placeholder={input.placeholder}
                        register={register}
                        isRequired={input.isRequired} />
                })}
            </StyledContactInputContainer>
        </StyledContactInfo>
    )
}
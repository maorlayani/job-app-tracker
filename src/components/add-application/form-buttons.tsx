import styled from "styled-components"
import { StyledRemoveButton } from "../application-details/styled-application-details"
import { StyledButton } from "../styles/buttons.styled"

export const StyledFormButtons = styled.div`
    // width:100%;
    display: flex;
    justify-content: space-between;
    padding: .2em;
    flex-wrap: wrap;
    margin-block-end: 1em;
    button {
        margin: 1em;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`
const AddApplicationButton = styled(StyledButton)`
    width: 100px;
    font-weight: bold;
    @media (max-width: 500px) {
        width: 100%;
    }
`
const ResetFormBottun = styled(StyledRemoveButton)`
    background-color: transparent;  
    width: 100px;
    @media (max-width: 500px) {
        width: 100%;
    }
`
interface FormButtonsProps {
    clearForm: () => void
}
export const FormButtons: React.FC<FormButtonsProps> = ({ clearForm }) => {
    return (
        <StyledFormButtons>
            <AddApplicationButton>Submit</AddApplicationButton>
            <ResetFormBottun type='button' onClick={clearForm}>Clear form</ResetFormBottun>
        </StyledFormButtons>
    )
}
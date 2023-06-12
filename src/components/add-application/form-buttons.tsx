import styled from "styled-components"
import { StyledButton, StyledRemoveButton } from "../styles/buttons.styled"
import { FormSectionTxt } from "./form-sections-bar"

export const StyledFormButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .2em;
    flex-wrap: wrap;
    margin-block-end: 1em;
`
const AddApplicationButton = styled(StyledButton)`
    width: 100px;
    font-weight: bold;
    margin: 1em;
    @media (max-width: 500px) {
        width: 40%;
        margin: 1em 1em 0 0;
    }
`
const ResetFormBottun = styled(StyledRemoveButton)`
    background-color: transparent;  
    width: 100px;
    margin: 1em;
    @media (max-width: 500px) {
        width: 100%;
        margin: 1em 0 0 0;
    }
`
interface FormButtonsProps {
    clearForm: () => void,
    setSection: (setNewPage: number, isAbsolutePage?: boolean) => void,
    selectedSection: FormSectionTxt,
    page: number
}
export const FormButtons: React.FC<FormButtonsProps> = ({ clearForm, setSection, page }) => {
    return (
        <StyledFormButtons>
            {page > 0 && <AddApplicationButton type='button' onClick={() => setSection(-1)}>Prev</AddApplicationButton>}
            {page < 3 && <AddApplicationButton type='button' onClick={() => setSection(1)}>Next</AddApplicationButton>}
            {page === 3 && <AddApplicationButton>Submit</AddApplicationButton>}
            {/* <ResetFormBottun type='button' onClick={clearForm}>Clear form</ResetFormBottun> */}
        </StyledFormButtons>
    )
}
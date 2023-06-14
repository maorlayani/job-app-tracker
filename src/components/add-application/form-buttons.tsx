import styled from "styled-components"
import { StyledButton, StyledRemoveButton } from "../styles/buttons.styled"
import { FormSectionTxt } from "./form-sections-bar"
import { useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"

export const StyledFormButtons = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .2em;
    flex-wrap: wrap;
    margin-block-end: 1em;
`
interface AddApplicationButtonProps {
    isLoading?: boolean
}
const AddApplicationButton = styled(StyledButton) <AddApplicationButtonProps>`
    width: 100px;
    font-weight: bold;
    margin: 1em;
   ${props => props.isLoading ?
        `background-color: var(--footer-background);
        color: var(--primary-button);
        cursor: not-allowed;`: ''};
    &:hover {
        ${props => props.isLoading ?
        `background-color: var(--footer-background);
        cursor:  not-allowed;` : ''}
    }
    &:active {
        ${props => props.isLoading ?
        `background-color: var(--footer-background);
        cursor:  not-allowed;` : ''}
    }
@media(max - width: 500px) {
    width: 40 %;
    margin: 1em 1em 0 0;
}
`
const ResetFormBottun = styled(StyledRemoveButton)`
    background - color: transparent;
    width: 100px;
    margin: 1em;
    @media(max - width: 500px) {
        width: 100 %;
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
    const loading = useAppSelector((state: RootState) => state.tracker.loading)

    return (
        <StyledFormButtons>
            {page > 0 && <AddApplicationButton type='button' onClick={() => setSection(-1)}>Prev</AddApplicationButton>}
            {page < 3 && <AddApplicationButton type='button' onClick={() => setSection(1)}>Next</AddApplicationButton>}
            {page === 3 && <AddApplicationButton isLoading={loading.isLoading}>Submit</AddApplicationButton>}
            {/* <ResetFormBottun type='button' onClick={clearForm}>Clear form</ResetFormBottun> */}
        </StyledFormButtons>
    )
}
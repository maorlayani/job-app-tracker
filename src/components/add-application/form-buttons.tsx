import styled from "styled-components"
import { StyledButton, StyledRemoveButton } from "../styles/buttons.styled"
import { FormSectionTxt } from "./form-sections-bar"
import { useEffect, useState } from "react"

export const StyledFormButtons = styled.div`
    // width: 100%;
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
    setSelectedSection: (selectedSection: FormSectionTxt) => void,
    selectedSection: FormSectionTxt
}
export const FormButtons: React.FC<FormButtonsProps> = ({ clearForm, setSelectedSection, selectedSection }) => {

    const [page, setPage] = useState<number>(0)
    useEffect(() => {

    }, [])
    const setSection = (setNewPage: number) => {
        const FormSection = Object.values(FormSectionTxt)
        setPage(page + setNewPage)
        setSelectedSection(FormSection[page + setNewPage])
    }
    return (
        <StyledFormButtons>
            {page > 0 && <AddApplicationButton type='button' onClick={() => setSection(-1)}>Prev</AddApplicationButton>}
            {page < 3 && <AddApplicationButton type='button' onClick={() => setSection(1)}>Next</AddApplicationButton>}
            {page === 3 && <AddApplicationButton>Submit</AddApplicationButton>}
            {/* <ResetFormBottun type='button' onClick={clearForm}>Clear form</ResetFormBottun> */}
        </StyledFormButtons>
    )
}
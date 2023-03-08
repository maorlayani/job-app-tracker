import styled from "styled-components"
import { FilterButtonWrapper } from "../filter/filter-button/styled-filter-button"
import { StyledFilterModal } from "../filter/filter-modal/styled-filter-modal"
import { StyledButton } from "../styles/button.styled"
import { FlexRowCenterContainer } from "../styles/helper.styled"
import { InputContainer } from "../styles/input-container.styled"

export const StyledAddApplication = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-block-start: 70px; */
    /* justify-content: center; */
    /* gap: 4em; */
    margin: 0 2em 0 2em;
    h1 {
        align-self: 'flex-start';
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-inline-end: 2em;
        /* margin: 1em 0 .2em;  */
        font-size: 2em;
    }
`

export const AddApplicationTitleWarpper = styled(FlexRowCenterContainer)`
       margin-block-start: 90px;
`

export const StyledAddApplicationForm = styled.form`
    width: 850px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    box-shadow: 0 1px 3px 1px #ae84d1;
    border-radius: 12px;
    margin: 2em 0;
`

export const InputsWarpper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-block-end: 15px;
    max-width: 100%;
`

export const TextareaWarpper = styled.div`
    display: flex;
    flex-direction: column;
    margin-block-end: 15px;
`

export const ContactInputWarpper = styled(InputContainer)`
    width: 400px;
    gap: .7em;
    input{
        max-width: 320px;
    }
`
export const ContactInputContainer = styled(FlexRowCenterContainer)`
    width: 100%;
    justify-content: space-between;
`

export const AddApplicationButton = styled(StyledButton)`
    width: 200px;
    font-weight: bold;
`

export const TechButton = styled(StyledButton)`
    min-width: unset;
    align-self: flex-start;
    border-radius: 12px;
    padding: 0.4em 0.8em;
`

export const TechModal = styled(StyledFilterModal)`
    top: 330px;
`

export const TechContainer = styled(InputsWarpper)`
    justify-content: flex-start;
    width: 100%;
`

export const TechTagContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    gap: 20px;  
    width: 100%;
`
export const TechTag = styled.span`
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #574268d2;
    background-color: #00000014;
    font-weight: 600;
    padding: 0.3em 0.7em;
    &:hover{
        cursor: default;
    }
`
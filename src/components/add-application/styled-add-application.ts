import styled from "styled-components"
import { FilterButtonWrapper } from "../filter/filter-button/styled-filter-button"
import { StyledFilterModal } from "../filter/filter-modal/styled-filter-modal"
import { StyledButton } from "../styles/buttons.styled"
import { FlexRowCenterContainer } from "../styles/helper.styled"
import background from '../../assets/svg/low-poly-grid-haikei.svg'

export const StyledAddApplication = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 70px);
    background-color: var(--background);
    padding-block-start: 40px;
    h3 {
        align-self: 'flex-start';
        margin-inline-end: 2em;
        font-size: 2em;
    }
`

export const AddApplicationTitleWarpper = styled(FlexRowCenterContainer)`
    //    margin-block-start: 90px;
`

export const StyledAddApplicationForm = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    margin: 2em 0;
`

export const InputsWarpper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-block-end: 15px;
`

export const TextareaWarpper = styled.div`
    display: flex;
    flex-direction: column;
    margin-block-end: 15px;
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
    top: 360px;
    width: 200px;
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
export const TechTagContent = styled.div`
    display: flex;
    align-items: center;
    border-radius: 9px;
    background-color: #d9d9d9c7;
    width: fit-content;
`

export const TechName = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #877993d2;
    font-weight: 600;
    padding: 0.3em 0.7em 0.3em 0;
    &:hover {
        cursor: default;
    }
`

export const TechLogo = styled.img`
    width: 24px;
    height: 24px;
    padding: 0 .3em ;
`
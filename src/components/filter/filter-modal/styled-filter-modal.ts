import styled from "styled-components"
import { StyledButton } from "../../styles/buttons.styled"

export const StyledFilterModal = styled.div`
    width: 235px;  
    max-height: 400px;
    background-color: #fff;
    position: absolute;
    top: 180px;
    border-radius: .8em;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08) ,0px 4px 4px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    font-size: .9em;
    z-index: 10;
    @media (max-width: 500px) {
        top: 160px;
        right: 15%;
        width: 250px;
    }
     @media (min-width: 800px) {
        right: unset;
        width: 300px;

    }
    @media (min-width: 1050px) {
        top: 130px;
        right: 13%;
    }
    @media (min-width: 1270px) {
        top: 130px;
        right: unset;
    }
`
export const OptionsContainer = styled.div`
    overflow-x: auto;
    margin-block-end: .1em;
`
export const StyledFilterModalButton = styled(StyledButton)`
    font-size: .9em;
    margin: 10px;
`
export const FilterButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #cfcfcf;
`
import styled from "styled-components"
import { StyledButton } from "../../styles/button.styled"

export const StyledFilterModal = styled.div`
    width: 300px;  
    max-height: 400px;
    background-color: #fff;
    position: absolute;
    top: 130px;
    border-radius: .8em;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08) ,0px 4px 4px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    font-size: .9em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    border-top: 1px solid lightgray;
`
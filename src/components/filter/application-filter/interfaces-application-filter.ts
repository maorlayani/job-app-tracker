import styled from "styled-components"
import { StyledButton } from "../../styles/button.styled"

export const StyledCustomSelectFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3em 0 1em 3em;
    gap: 1em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #00000099;
`

export const StyledResetButton = styled(StyledButton)`
    background-color: transparent;
    color: inherit;
    font-weight: 600;
    font-family: inherit;
    padding: .4em;
    border-radius: 6px;
    &:hover{
        background-color: #00000014;
    }
    &:active{
        background-color: #0000001e;
        color: #000000e5
    }
`

export const FlexContainer = styled.div`
    display: flex;
    gap: 1em;
`

export const StyledSearchButton = styled(StyledButton)`
    border-radius: 1.6em;
    padding: 7px 13px;
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #ae84d1;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #ae84d1;
    transition-property: background-color,box-shadow, color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    &:hover{
      background-color: #f5d5ff78;
      cursor: pointer;
    box-shadow: inset 0 0 0 2px #ae84d1;
    }
    &:active{
        box-shadow: inset 0 0 0 2px #906dac;
        color: #906dac;
        background-color: #f5d5ff78;
   }
`

export const StyledInput = styled.input`
    width: 290px;
    border-radius: 6px;
    outline: none;
    border: none;
    padding: .3em .5em;
    box-shadow: inset 0 0 0 1px #0000004c;
    font-family: inherit;
    color: inherit;
`
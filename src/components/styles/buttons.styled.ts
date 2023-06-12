import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledButton = styled.button`
   padding: .7em;
   border-radius: 6px;
   border: none;
   min-width: 90px;
   background-color: var(--primary-button);
   color: var(--background);
   font-weight: 500;
   font-size: 1em;
   &:hover {
      background-color: var(--primary-full-button-hover);
      cursor: pointer;
    }
   &:active {
      background-color: var(--primary-full-button-active);
   }
`

export const CardButton = styled(StyledButton)`
   border-radius: 6px;
   padding: 8px;
   width: 150px;
   margin-block-start: 20px;
   background-color: var(--white-background);
   color: var(--primary-button);
   border: 1px solid var(--primary-button);
   &:hover {
      background-color: var(--primary-unfilled-button-hover-background);
      border: 1px solid var(--primary-unfilled-button-hover-color);
      color: var(--primary-unfilled-button-hover-color);
   }
   &:active {
      background-color: var(--primary-unfilled-button-active-background);
      border: 1px solid var(--primary-unfilled-button-active-color);
      color: var(--primary-unfilled-button-active-color);
   }
`
export const StyledResetButton = styled(StyledButton)`
   background-color: transparent;
   color: var(--filter-text);
   font-weight: 600;
   padding: .4em;
   border-radius: 6px;
   &:hover {
      background-color: #00000014;
   }
   &:active {
      background-color: #0000001e;
      color: #000000e5
   }
   @media (max-width: 500px) {
      font-size: .85em;
      padding: 4px 6px;
      height: 26px;
      min-width: 40px;
   }
`

export const StyledRemoveButton = styled(StyledButton)`
    border: 1px solid #ae84d1;
    color: #ae84d1;
    background-color: #fff;
        &:hover{
            color: #b592d1bb;
            border: 1px solid #b592d1bb;
            background-color: unset;
        }
        &:active{
            border: 1px solid #ae84d1;
            color: #ae84d1;
            background-color: unset;
        }
`

export const CallToActionButton = styled(StyledButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    font-size: 1.1em;
    text-decoration: none;
`

export const StyledLink = styled(Link)`
    margin-block-start: .5em;   
    text-align: center;
    color: var(--filter-text);
`
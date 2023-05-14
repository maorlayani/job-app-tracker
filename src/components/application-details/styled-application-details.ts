import styled, { keyframes } from "styled-components"
import { StyledButton } from "../styles/buttons.styled"
import { StyledCompanyLogo } from "../styles/company-logo.styled"
import { StyledCompanyName } from "../styles/company-name.styled"
import { ImgCloseIconContainer } from "../styles/img-close-icon-container"
import { StyledPosition } from "../styles/position.styled"
import { StyledApplicationDetailsProps } from "./interfaces-application-details"
import { TechTagContent, TechName } from '../add-application/styled-add-application'

const growDown = keyframes`
   0% {
        transform: scaleY(0)
    }
    /* 25% {
        transform: scaleY(.25)
    } */
    50% {
        transform: scaleY(.5)
    }
    /* 75% {
        transform: scaleY(.75)
    } */
    100% {
        transform: scaleY(1)
    }
`


// export const StyledApplicationDetails = styled.div<StyledApplicationDetailsProps>`
export const StyledApplicationDetails = styled.div`
    background-color: #fff;
    width: 900px;
    /* min-height: 300px; */
    /* min-height: 100%; */
    /* max-height: calc(100vh - 240px); */
    max-height: 100%;
    margin: .5em 0 1.5em 0;
    border-radius: 12px;
    /* border-top-left-radius: 12px; */
    /* border-bottom-left-radius: 12px; */
    // font-family: 'league-spartan-medium';
    /* box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%); */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 .5em 0 .5em;
    box-sizing: border-box;
    /* margin-block-start: 1em; */
    animation: ${growDown} 250ms ease-in-out forwards;
    transform-origin: top center;
`

export const TagContainerCol = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    padding: .2em;
    flex-wrap: wrap;
    gap: .2em;
    margin-block-end: 1em;
`

export const TagContainerRow = styled.div`
    /* display: inline-flex; */
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    padding: .2em;
    flex-wrap: wrap;
    /* gap: 4em; */
    margin-block-end: 1em;
    button{
        margin: 1em;
    }
`

export const StyledTag = styled.div`
    font-size: 1em;
    color: #2c3a3a;
    display: flex;
    align-items: center;
    gap: 8px;
    /* span {
        color: #574268d2;
    } */
`

export const StyledTagContent = styled.span`
    /* color: #5ba4a4; */
    color: #574268d2;
   `

export const StyledApplicationContent = styled.div`
    align-self: flex-start;
    width: 100%;
    overflow-x: auto;
    /* margin: 1em 0; */
    margin-block-start: 1em;
    flex-grow: 1;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4em;
    padding: 1em;
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
export const StyledDetailsIcon = styled(ImgCloseIconContainer)`
    padding: unset;
    img {
        width: 25px;
        height: 25px;
    }
    &:hover{
        cursor: unset;
    }
`

export const TagTitle = styled.span`
    font-size: 1.2em;
    min-width: 150px;
`

export const DetailsTechTagContent = styled(TechTagContent)`
    background-color: #D4DCE1;
    font-size: .8em;
    padding: .3em;
    img{
        width: 20px;
        height: 20px;
    }
`

export const ResetFormBottun = styled(StyledRemoveButton)`
    background-color: transparent;  
`
import styled from "styled-components"
import { StyledButton } from "../styles/button.styled"
import { StyledCompanyLogo } from "../styles/company-logo.styled"
import { StyledCompanyName } from "../styles/company-name.styled"
import { ImgCloseIconContainer } from "../styles/img-close-icon-container"
import { StyledPosition } from "../styles/position.styled"
import { StyledApplicationDetailsProps } from "./interfaces-application-details"

export const StyledApplicationDetails = styled.div<StyledApplicationDetailsProps>`
    background-color: #fff;
    width: 500px;
    /* min-height: 300px; */
    /* min-height: 100%; */
    /* max-height: calc(100vh - 240px); */
    max-height: 100%;
    margin: .5em 0 1.5em 0;
    border-radius: 12px;
    /* border-top-left-radius: 12px; */
    /* border-bottom-left-radius: 12px; */
    font-family: 'league-spartan-medium';
    /* position: absolute; */
    /* top: 20px; */
    /* right: ${props => props.isOpen ? '0' : '-600px'}; */
    /* box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%); */
    transition: right 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 .5em 0 .5em;
    box-sizing: border-box;
    /* margin-block-start: 1em; */
`

export const TagContainerCol = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

export const TagContainerRow = styled.div`
    display: inline-flex;
    padding: .5em;
    flex-wrap: wrap;
    gap: .2em;
`

export const StyledTag = styled.span`
    font-size: 1em;
    color: #2c3a3a;
`

export const StyledTagContent = styled.span`
    color: #5ba4a4;
`

export const StyledApplicationContent = styled.div`
    align-self: flex-start;
    width: 100%;
    overflow-x: auto;
    /* margin: 1em 0; */
    margin-block-start: 1em;
    flex-grow: 1;
`

export const StyledCompanyLogoAppDetails = styled(StyledCompanyLogo)`
    max-width: 75px;
    min-width: 75px;
    max-height: 75px;
    min-height: 75px;
    border: 0.5px solid #ae84d1;
    margin: 1em 0;
`
export const StyledPositionAppDetails = styled(StyledPosition)`
    font-size: 1.3em;
    margin-block-end: .1em;
`

export const StyledCompanyNameAppDetails = styled(StyledCompanyName)`
    font-size: 0.9em;
    color:  #574268d2;
    margin-block-end: .5em;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4em;
    /* margin-top: 1em; */
    /* padding: 1em 1em 0 1em; */
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
export const StyledCloseIcon = styled(ImgCloseIconContainer)`
    img{
        width: 25px;
        height: 25px;
    }
`
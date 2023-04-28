import styled from "styled-components"
import { StyledIconProps } from "./interfaces-application-preview"

export const PreviewLI = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #ffffffeb;
    width: 900px;
    min-width: 400px;
    height: 140px;
    margin-block-end: 10px;
    border-radius: 12px;
    font-family: 'league-spartan-medium';
    box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%),0 1px 3px 1px rgb(60 64 67 / 15%);
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 1px #ae84d1, 0 1px 3px 1px #ae84d1;
    }
`

export const PreviewContainer = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    padding: 0 2em 2em 2em;
`

export const PreviewContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;
`

export const RowContainer = styled.div`
    display: flex;
    gap: 10px;
    color: #463553d3;
`

export const StyledTag = styled.span`
    min-width: fit-content;
    font-size: 0.9em;
`

export const PreviewIconsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1em 1em 0 1em;
    font-size: 0.8em;
    gap: 1em;
`

export const StyledIcon = styled.div<StyledIconProps>`
    background-color:#fff;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.isMarked ? '#ae84d1' : '#b6b3b3'};
    font-size: 1.4em;
`

export const StyledActionIcon = styled.div`
    background-color:#b6b3b3 ;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    font-size: 0.8em;
`
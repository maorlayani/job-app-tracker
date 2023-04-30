import styled from "styled-components"
import { PreviewLIProps, StyledIconProps } from "./interfaces-application-preview"



export const PreviewContainer = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    padding: 0 2em 2em 2em;
    flex-direction: column;
`

export const PreviewContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
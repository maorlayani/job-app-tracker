import styled from "styled-components"
import { StyledFilterButtonProps } from "./interfaces-filter-button"

export const FilterButtonWrapper = styled.div`
    display: flex;
    min-width: fit-content;
`

export const StyledFilterButton = styled.button<StyledFilterButtonProps>`
    border-radius: 1.6rem;
    font-size: 1em;
    padding: 4px 12px;
    height: 32px;
    box-shadow: inset 0 0 0 1px${props => props.isFilterChecked ? '#ffffff' : '#0000004c'} ;
    border: none;
    color: ${props => props.isFilterChecked ? '#ffffff' : '#00000099'} ;
    background-color:${props => props.isFilterChecked ? '#ae84d1' : '#ffffff'};
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition-property: background-color,box-shadow, color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    span:last-child {
        margin-inline-start: 4px;
        min-width: fit-content;
    }
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 0 0 ${props => !props.isFilterChecked ? ' 2px #0000004c' : '1px'} ;
        background-color:${props => !props.isFilterChecked ? 'rgba(0,0,0,0.08)' : ''};
        color: ${props => !props.isFilterChecked ? '#00000099)' : ''} ;

    }
    &:active{
        box-shadow: inset 0 0 0 ${props => !props.isFilterChecked ? '2px #00000099' : '1px'} ;
        color: ${props => !props.isFilterChecked ? 'rgba(0,0,0,0.9)' : ''} ;
        background-color:${props => props.isFilterChecked ? '#a36ccf' : ''};
    }
    @media (max-width: 500px) {
        font-size: .8em;
        padding: 4px 6px;
        height: 26px;
    }
`

import styled from "styled-components";
import { MarkProps } from "./interface-progress-bar";

export const StyledProgressBar = styled.div`
    width: 95%;
    height: 6px;
    background-color: #5ba4a4;
    border-radius: 12px;
    position: relative;
    margin-block-start: 20px;
    /* display: flex; */
    /* align-items:center; */
`
export const MarkContainer = styled.div`
    /* display: flex;
    flex-direction: column; */
    /* height: 90px; */
`
export const Mark = styled.div<MarkProps>`
    position: absolute;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    top: -12px;
    background-color: #fff;
    border: 3px solid #5ba4a4;
    left: ${props => props.left};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const MarkTitle = styled.span<MarkProps>`
    position: absolute;
    font-size: .85em;
    left: ${props => props.left};
    font-weight: 600;
    margin-block-start: 1.5em;
`

export const MarkSign = styled.div<MarkProps>`
    left: ${props => props.left};
    position: absolute;
    background-color: red;
  
    border-top: 0;
    border-right: 10px solid #fff;
    border-left: 10px solid #fff;
    border-top: 20px red solid;
    margin-block-start: -2.5em;
    margin-inline-start: .3em;
`

export const InsideMark = styled.div`
    /* position: absolute; */
    height: 12px;
    width: 12px;
    border-radius: 50%;
    top: -15px;
    background-color: #5ba4a4;
    left: 0%;
`
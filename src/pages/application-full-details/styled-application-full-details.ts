import styled, { keyframes } from "styled-components";
import { TagContainerRow } from "../../components/application-details/styled-application-details";

export const StyledApplicationFullDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #00000099;
    display: flex;
    justify-content: center;
    overflow-y: auto;
`
const grow = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`
export const FullDetailsContent = styled.div`
    background-color: #fff;
    width: 850px;
    /* height: 900px; */
    border-radius: 12px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    // font-family: 'league-spartan-medium';
    overflow-y: auto;
    animation: ${grow} .8s forwards;
    transform-origin: 50% 50%;
`
export const MainContainer = styled.div`
    display: flex;
    width: 90%;
    margin-block-end: 2em;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 90%; */
    /* padding: 1em; */
    box-sizing: border-box;
`

export const LeftSideContentContainer = styled(ContentContainer)`
    margin-inline-end: 3em;
`

export const RightSideContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    `
export const FullDetailsRowContainer = styled(TagContainerRow)`
    /* width: 90%; */
    `

export const MapContainer = styled.div`
/* flex-grow: 1; */
    /* width: 100%; */
    height: 300px;
    /* border: 1px solid black; */
`


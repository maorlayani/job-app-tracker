import styled, { keyframes } from "styled-components"

const shine = keyframes`
to {
    background-position-x: -200%;
  }
`

export const StyledApplicationLoader = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    background-color: #fff;
    width: 900px;
    height: 140px;
    margin-block-end: 10px;
    border-radius: 12px;
`

export const RectangleLoader = styled.div`
    width: 90%;
    height: 15px;
    border-radius: 4px;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s ${shine} linear infinite;
`

export const TitleLoader = styled(RectangleLoader)`
    width: 45%;
`
export const LogoLoader = styled(RectangleLoader)`
    width: 65px;
    height: 65px;
    margin-inline-start: 2em;
    border-radius: 12px;
`
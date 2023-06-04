import styled, { keyframes } from "styled-components"

const shine = keyframes`
to {
    background-position-x: -200%;
  }
`
export const StyledApplicationLoader = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: #fff;
    width: 230px;
    height: 350px;
    margin-block-end: 10px;
    border-radius: 12px;
    @media (max-width: 500px) {
        width: 300px;
    }
    @media (min-width: 600px) {
        width: 270px;
    }
    @media (min-width: 800px) {
        width: 230px;
    }
    @media (min-width: 900px) {
        width: 270px;
    }
`
export const ConetntContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  gap: .8em;
`
export const RectangleLoader = styled.div`
    width: 85px;
    height: 10px;
    border-radius: 4px;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s ${shine} linear infinite;
    margin-block-end: .3em;
`
export const TitleLoader = styled(RectangleLoader)`
    width: 120px;
    height: 15px;
`
export const SubTitleLoader = styled(RectangleLoader)`
    width: 150px;
    height: 15px;
`
export const LogoLoader = styled(RectangleLoader)`
    width: 65px;
    height: 65px;
    margin-block: 2em;
    border-radius: 12px;
`
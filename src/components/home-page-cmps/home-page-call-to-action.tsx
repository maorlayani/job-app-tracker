import styled from 'styled-components'
import { StyledButton } from '../styles/buttons.styled'

const CallToActionButton = styled(StyledButton)`
    width: 150px;
    font-size: 1.1em;
`
const DemoButton = styled.button`
    background-color: transparent; 
    border: none;
    text-decoration: underline;
    margin-block-start: 10px;
    width: 150px;
    font-size: 1.1em;
    padding: .5em; 
    border-radius: 6px;
    color: #00000099;
    &:hover {
        cursor: pointer;
        background-color: #00000014;
    }
    &:active{
        background-color: #0000001e;
    color: #000000e5;
    }
`
export const HomePageCallToAction = () => {
    return (
        <>
            <CallToActionButton>Sign up</CallToActionButton>
            <DemoButton>View demo</DemoButton>
        </>
    )
}
import styled from 'styled-components'

const StyledHamburger = styled.div`
    height: 23px;
    width: 30px;
    position: absolute;
    top: 22px;
    right: 20px;
    z-index: 2;
    flex-direction: column;
    justify-content: space-between;
    display: none;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 500px) {
        display: flex;
     }
`
const HamburgerLine = styled.span<HamburgerLineProps>`
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: var(--secondary-button);
`
const HamburgerLine1 = styled(HamburgerLine)`
    transform-origin: 0% 0%;
    transition: transform 0.2s ease-in-out;
    ${props => props.isDropdownOpen ? 'transform: rotate(45deg);' : ''}

`
const HamburgerLine2 = styled(HamburgerLine)`
    transition: transform 0.1s ease-in-out;
    ${props => props.isDropdownOpen ? 'transform: scaleY(0);' : ''}

`
const HamburgerLine3 = styled(HamburgerLine)`
    transform-origin: 0% 100%;
    transition: transform 0.2s ease-in-out;
    ${props => props.isDropdownOpen ? 'transform: rotate(-45deg);' : ''}

`
interface HamburgerLineProps {
    isDropdownOpen: boolean
}
interface HamburgerProps {
    isDropdownOpen: boolean,
    setIsDropdownOpen: (isDropdownOpen: boolean) => void
}
export const Hamburger: React.FC<HamburgerProps> = ({ isDropdownOpen, setIsDropdownOpen }) => {
    return (
        <StyledHamburger onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <HamburgerLine1 isDropdownOpen={isDropdownOpen}></HamburgerLine1>
            <HamburgerLine2 isDropdownOpen={isDropdownOpen}></HamburgerLine2>
            <HamburgerLine3 isDropdownOpen={isDropdownOpen}></HamburgerLine3>
        </StyledHamburger>
    )
}
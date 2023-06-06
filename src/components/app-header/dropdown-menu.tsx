import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledDropdownMenu = styled.div<StyledDropdownMenuProps>`
    margin-top: 70px;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    height: calc(100vh - 70px);
    width: 100%;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    // margin-left: -40px;
    // padding-left: 50px;
    transition: transform 0.5s ease-in-out;
    text-align: center;
    // z-index: 1000;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.isDropdownOpen ? 'transform: translateX(0);' : ''}
`
const StyledNavLink = styled(NavLink)`
    margin-bottom: 1.2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #cfcfcf;
    text-decoration: none;
    &:hover {
        color: #ae84d1;
    }
    &.active {
        color: #ae84d1;
    } 
`
interface StyledDropdownMenuProps {
    isDropdownOpen: boolean
}
interface DropdownMenuProps {
    isDropdownOpen: boolean,
    setIsDropdownOpen: (isDropdownOpen: boolean) => void
}
export const DropdownMenu: React.FC<DropdownMenuProps> = ({ isDropdownOpen, setIsDropdownOpen }) => {
    const onCloseDropdown = () => {
        setIsDropdownOpen(false)
    }
    return (
        <StyledDropdownMenu isDropdownOpen={isDropdownOpen}>
            <StyledNavLink onClick={onCloseDropdown} to={'/'}>Home</StyledNavLink>
            <StyledNavLink onClick={onCloseDropdown} to={'/tracker'}>Tracker</StyledNavLink>
            <StyledNavLink onClick={onCloseDropdown} to={'/add'}>Add Application</StyledNavLink>
            <StyledNavLink onClick={onCloseDropdown} to={'/archive'}>Archive</StyledNavLink>
        </StyledDropdownMenu>
    )
}
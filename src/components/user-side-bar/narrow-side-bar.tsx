import styled from 'styled-components'
import { UserIcon } from '../user-icon/user-icon'

const StyledNarrowSideBar = styled.div`
    width: 20px;
    height: 80%;
    background-color: #dbb3fc;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    display: flex;
    align-items: center;
    // box-shadow: 1px 0px 3px 2px #cfcfcf;
    box-shadow: 3px 2px 4px 1px #cfcfcf;
`
const UserIconContainer = styled.div<NarrowSideBarProps>`
    width: 45px;
    height: 45px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-inline-start: 0px;
    position: absolute;
    box-shadow: ${props => props.isSideBarOpen ? '0px 0px 3px 2px #cfcfcf' : '3px 1px 5px 0px #cfcfcf'};
    &:hover {
        cursor: pointer;
        background-color: #dbb3fc;
    }
    img {
        width: 35px;
        height: 35px;
        background-color: #fff;
    }
`
interface NarrowSideBarProps {
    isSideBarOpen: boolean,
    toggleSideBar?: () => void
}
export const NarrowSideBar: React.FC<NarrowSideBarProps> = ({ isSideBarOpen, toggleSideBar }) => {
    return (
        <StyledNarrowSideBar>
            <UserIconContainer isSideBarOpen={isSideBarOpen} onClick={toggleSideBar}>
                <UserIcon />
            </UserIconContainer>
        </StyledNarrowSideBar>
    )
}
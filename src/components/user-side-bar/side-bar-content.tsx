import styled, { keyframes } from 'styled-components'
import { LoggedUserHeader } from '../app-header/logged-user-header'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'
import { StyledRemoveButton } from '../styles/buttons.styled'
import { logout } from '../../store/reducers/user-slice'
import { Link } from 'react-router-dom'

const slideIn = keyframes`
    0% {
        transform: translateX(-300px);
    }
    100% {
        transform: translateX(0);
    }
`
const StyledSideBarContnet = styled.div<SideBarContnetProps>`
    width: 250px;
    height: 80%;
    background-color: #fff;
    // border-top-right-radius: 9px;
    // border-bottom-right-radius: 9px;
    box-shadow: 3px 2px 4px 1px #cfcfcf;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    // transition: transform 300ms ease-in;
    // animation: ${slideIn} .5s ease-out;
    transform: ${props => props.isSideBarOpen ? '' : 'translateX(-300px)'};
    transition: ${props => props.isSideBarOpen ? 'transform 300ms ease-out' : ''};
`
const SideBarHeader = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 .5rem 1rem .5rem;
    border-bottom: 1px solid #cfcfcf;
`
const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-block-start: 2rem;
    gap: 1rem;
`
const SideBarButton = styled(StyledRemoveButton)`
    font-size: .9rem;
    font-weight: 500;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    // color: #18121dd2;

    &:hover {
        background-color: #ae84d138;
        border: none;
    }
    &:active {
        border: none;
    }
`
const StyledSpan = styled.span`
    color: #18121dd2;
    font-size: 1rem;
    font-weight: 600;
`

interface SideBarContnetProps {
    isSideBarOpen: boolean
}
export const SideBarContnet: React.FC<SideBarContnetProps> = ({ isSideBarOpen }) => {
    const user = useAppSelector((state: RootState) => state.user.user)
    const dispatch = useAppDispatch()
    const OnLogout = () => {
        if (user) dispatch(logout(user.sessionId))
    }
    return (
        <StyledSideBarContnet isSideBarOpen={isSideBarOpen}>
            <SideBarHeader>
                {user ? <LoggedUserHeader user={user} /> :
                    <StyledSpan>No User Logged In</StyledSpan>}
            </SideBarHeader>
            <MainContentContainer>
                <SideBarButton>Dashbaord</SideBarButton>
                <SideBarButton>Upload Excel File</SideBarButton>
                <SideBarButton>Activity</SideBarButton>
                {user && <SideBarButton as={Link} to={'/account'}>Settings</SideBarButton>}
                {user && <SideBarButton onClick={OnLogout}>Logout</SideBarButton>}
                {!user && <SideBarButton as={Link} to={'/register/signup'}>Sign up</SideBarButton>}
            </MainContentContainer>
        </StyledSideBarContnet>
    )
}
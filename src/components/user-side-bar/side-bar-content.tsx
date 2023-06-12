import styled from 'styled-components'
import { LoggedUserHeader } from '../app-header/logged-user-header'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'
import { StyledRemoveButton, StyledResetButton } from '../styles/buttons.styled'
import { logout } from '../../store/reducers/user-slice'
import { Link } from 'react-router-dom'

const StyledSideBarContnet = styled.div<SideBarContnetProps>`
    width: 250px;
    height: 350px;
    background-color: #fff;
    box-shadow: 3px 2px 4px 1px #cfcfcf;
    display: flex;
    flex-direction: column;
    padding: 1rem;
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
const SideBarButton = styled(StyledResetButton)`
    font-size: .9rem;
    border: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--filter-text);;
    padding: .5rem 1rem;
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
                <LoggedUserHeader user={user} />
            </SideBarHeader>
            <MainContentContainer>
                {/* <SideBarButton>Dashbaord</SideBarButton> */}
                {/* <SideBarButton>Upload Excel File</SideBarButton> */}
                {/* <SideBarButton>Activity</SideBarButton> */}
                {user && <SideBarButton as={Link} to={'/account'}>Settings</SideBarButton>}
                {user && <SideBarButton onClick={OnLogout}>Logout</SideBarButton>}
                {!user && <>
                    <SideBarButton as={Link} to={'/register/login'}>Login</SideBarButton>
                    <SideBarButton as={Link} to={'/register/signup'}>Sign up</SideBarButton>
                </>}
            </MainContentContainer>
        </StyledSideBarContnet>
    )
}
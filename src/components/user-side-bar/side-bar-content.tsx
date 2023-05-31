import styled, { keyframes } from 'styled-components'
import { LoggedUserHeader } from '../app-header/logged-user-header'
import { useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'
import { StyledRemoveButton } from '../styles/buttons.styled'

const slideIn = keyframes`
    0% {
        transform: translateX(-300px);
    }
    100% {
        transform: translateX(0);
    }
`
const StyledSideBarContnet = styled.div<SideBarContnetProps>`
    width: 300px;
    height: 80%;
    background-color: #fff;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
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
    justify-content: flex-start;
    padding: 0 .5rem 1rem .5rem;
    border-bottom: 1px solid #cfcfcf;
`
const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-block-start: 3rem;
    gap: 1rem;
`
const SideBarButton = styled(StyledRemoveButton)`
    font-size: 1rem;
    font-weight: 600;
    border: none;
    &:hover {
        background-color: #ae84d138;
        border: none;1
    }
    &:active {
        border: none;
    }
`

interface SideBarContnetProps {
    isSideBarOpen: boolean
}
export const SideBarContnet: React.FC<SideBarContnetProps> = ({ isSideBarOpen }) => {
    const user = useAppSelector((state: RootState) => state.user.user)

    return (
        <StyledSideBarContnet isSideBarOpen={isSideBarOpen}>
            <SideBarHeader>

                {user ? <LoggedUserHeader user={user} /> :
                    <div></div>}
            </SideBarHeader>
            <MainContentContainer>
                <SideBarButton>Dashbaord</SideBarButton>
                <SideBarButton>Upload Excel file</SideBarButton>
                <SideBarButton>Activity Log</SideBarButton>
                <SideBarButton>Settings</SideBarButton>
                <SideBarButton>Logout</SideBarButton>
            </MainContentContainer>
        </StyledSideBarContnet>
    )
}
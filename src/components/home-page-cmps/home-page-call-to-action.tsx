import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CallToActionButton, CardButton } from '../styles/buttons.styled'
import { RootState } from '../../store/store'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { logout } from '../../store/reducers/user-slice'

const LogoutButton = styled(CardButton)`
    width: 150px;
    font-size: 1.1em;
    background-color: var(--background);
    &:hover{
        background-color: var(--white-background);

    }
`
const DemoButton = styled.button`
    background-color: transparent; 
    border: none;
    text-decoration: underline;
    text-align: center;
    margin-block-start: 10px;
    width: 150px;
    font-size: 1.1em;
    padding: .5em; 
    border-radius: 6px;
    color: var(--filter-text);
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
    const user = useAppSelector((state: RootState) => state.user.user)
    const dispatch = useAppDispatch()

    const onLogout = () => {
        if (user) dispatch(logout(user.sessionId))
    }
    return (
        <>
            {user ? <LogoutButton onClick={onLogout}>Logout</LogoutButton>
                : <>
                    <CallToActionButton as={Link} to={'register/signup'}>Sign up</CallToActionButton>
                    <DemoButton as={Link} to={'tracker'}>View demo</DemoButton>
                </>}
        </>
    )
}
import styled from 'styled-components'
import { SettingsContainer } from '../../components/settings-container/settings-container'
import { useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { SettingsHeaderContainer } from '../../components/settings-container/settings-header-container'
import { useEffect } from 'react'

const StyledSettings = styled.div`
    background-color: var(--background);
    width: 100%;
    min-height: calc(100vh - 70px);
    padding-block: 40px;
`
const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`
export interface SettingsInputs {
    name: string,
    email: string,
    password: string,
    currnet: string
}
export enum InputsNames {
    name = 'name',
    email = 'email',
    password = 'password',
    currentPassword = 'currnet'
}
export const Settings = () => {
    const user = useAppSelector((state: RootState) => state.user.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) navigate('/register/signup')
    }, [user])
    const getSettingsContainer = () => {
        return [
            {
                title: 'Update Name',
                labelTxt: InputsNames.name,
                type: 'text',
                value: user?.username,
                instructions: 'A Name should not exceed 20 characters length.'
            },
            {
                title: 'Update Email',
                labelTxt: InputsNames.email,
                type: 'email',
                value: user?.email,
                instructions: 'A Email should not exceed 40 characters length.'

            },
            {
                title: 'Update Password',
                labelTxt: InputsNames.password,
                type: 'password',
                value: '',
                instructions: 'Enter a new password. A password must contain at least 8 characters.'
            }
        ]
    }

    return (
        <StyledSettings>
            {user && <ContentContainer>
                <SettingsHeaderContainer user={user} />
                {getSettingsContainer().map(container => {
                    return <SettingsContainer key={container.labelTxt}
                        title={container.title}
                        labelTxt={container.labelTxt}
                        value={container.value || ''}
                        type={container.type}
                        instructions={container.instructions} />
                })}
            </ContentContainer>}
        </StyledSettings>
    )
}
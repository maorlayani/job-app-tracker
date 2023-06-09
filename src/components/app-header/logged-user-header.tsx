import styled from 'styled-components'
import { MinUser } from '../../models/interfaces'
import { UserIcon } from '../user-icon/user-icon'

const StyledLoggedUserHeader = styled.div`
    display: flex;
    align-items: center;
    gap: .4em;
   
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const ContentTag = styled.span`
    color: #cfcfcf;
    font-weight: 700; 
`
interface LoggedUserHeaderProps {
    user: MinUser | null
}
export const LoggedUserHeader: React.FC<LoggedUserHeaderProps> = ({ user }) => {
    console.log(user);

    return (
        <StyledLoggedUserHeader>
            <UserIcon />
            <ContentContainer>
                {user ? <>
                    <ContentTag>{user.username}</ContentTag>
                    <ContentTag>{user.email}</ContentTag>
                </>
                    : <ContentTag>Hello Guest</ContentTag>
                }
            </ContentContainer>
        </StyledLoggedUserHeader>
    )
}
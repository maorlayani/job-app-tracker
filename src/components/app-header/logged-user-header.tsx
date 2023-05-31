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
    user: MinUser
}
export const LoggedUserHeader: React.FC<LoggedUserHeaderProps> = ({ user }) => {
    return (
        <StyledLoggedUserHeader>
            <UserIcon />
            <ContentContainer>
                <ContentTag>{user.username}</ContentTag>
                <ContentTag>{user.email}</ContentTag>
            </ContentContainer>
        </StyledLoggedUserHeader>
    )
}
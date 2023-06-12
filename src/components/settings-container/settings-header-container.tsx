import styled from 'styled-components'
import { MinUser } from '../../models/interfaces'
import { UserIcon } from '../user-icon/user-icon'

const StyledSettingsHeaderContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: var(--white-background);
    border-radius: 12px;
    border: 1px solid var(--primary-button);
    padding: 2rem;
    color: var(--primary-text);
    gap: 1rem;
    @media (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
const RowContentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
const LargeTag = styled.span`
    font-size: 1.25em;
    font-weight: 500;
`
const ColumnContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
`
const SmallTag = styled.span`
    font-size: 1em;
    color: var(--filter-text);
`
interface SettingsHeaderContainerProps {
    user: MinUser | null
}
export const SettingsHeaderContainer: React.FC<SettingsHeaderContainerProps> = ({ user }) => {
    return (
        <StyledSettingsHeaderContainer>
            <RowContentContainer>
                <UserIcon />
                <LargeTag>{user?.username}</LargeTag>
            </RowContentContainer>
            <ColumnContentContainer>
                <SmallTag>{user?.email}</SmallTag>
                <SmallTag>Joined: {user?.creatdedAt} </SmallTag>
                <SmallTag>Last update: {user?.updatedAt}</SmallTag>
            </ColumnContentContainer>
        </StyledSettingsHeaderContainer>
    )
}
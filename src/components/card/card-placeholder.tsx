import styled from 'styled-components'
import { CallToActionButton } from '../styles/buttons.styled'
import { Link } from 'react-router-dom'

const StyledCardPlaceholder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`
const TitleTag = styled.span`
    font-size: 1rem;
    font-weight: 500;
`
const AddApplicationButton = styled(CallToActionButton)`
    width: fit-content;
`
export const CardPlaceholder = () => {
    return (
        <StyledCardPlaceholder>
            <TitleTag>There are no applications</TitleTag>
            <AddApplicationButton as={Link} to={'/add'}>Add new Application</AddApplicationButton>
        </StyledCardPlaceholder>
    )
}
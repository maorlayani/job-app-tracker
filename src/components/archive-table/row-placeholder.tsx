import styled from 'styled-components'
import { StyledTableRow } from './table-row'

const StyledRowPlaceholder = styled(StyledTableRow)`
&:hover {
    background-color: #fff;
}
`

const PlaceholderContent = styled.span`
    width: 100%;
    padding: 1em;
    font-size: 1.3em;
    text-align: center;
`
interface RowPlaceholderProps {
    msg: string
}
export const RowPlaceholder: React.FC<RowPlaceholderProps> = ({ msg }) => {
    return (
        <StyledRowPlaceholder>
            <PlaceholderContent>{msg}</PlaceholderContent>
        </StyledRowPlaceholder>
    )
}
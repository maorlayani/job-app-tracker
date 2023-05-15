import styled from 'styled-components'
import { StyledCompanyLogo } from '../styles/company-logo.styled'

const StyledTableCell = styled.div`
    box-sizing: border-box;
    width: 20%;
    min-width: 128px;
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    gap: 1em;
`
const CellLogo = styled(StyledCompanyLogo)`
    border-radius: 6px;
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    margin: 0;
    // display: none;;
    // @media (min-width: 800px) {
    //     display: flex;
    // }
`
interface TableCellProps {
    txt: string,
    logoUrl: string
}
export const TableCell: React.FC<TableCellProps> = ({ txt, logoUrl }) => {
    return (
        <StyledTableCell>
            {logoUrl && <CellLogo logoUrl={logoUrl}></CellLogo>}
            {txt}
        </StyledTableCell>
    )
}
import styled from "styled-components"
import { ArchiveTable } from "../../components/archive-table/archive-table"

const StyledArchive = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-image: linear-gradient(45deg,#ded2e2,#fff);
    padding-block-start: 40px;
    overflow-y: auto;
`
const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: calc(642px + 1em);
    padding: 0 1em;
    @media (min-width: 800px) {
        padding: 0;
    }
`
export const Archive = () => {
    return (
        <StyledArchive>
            <TableContainer>
                <ArchiveTable />
            </TableContainer>
        </StyledArchive>
    )
}
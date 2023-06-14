import styled from "styled-components"
import { ArchiveTable } from "../components/archive-table/archive-table"
import { UserSideBar } from "../components/user-side-bar/user-side-bar"

const StyledArchive = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: var(--background);
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
            <UserSideBar />
            <TableContainer>
                <ArchiveTable />
            </TableContainer>
        </StyledArchive>
    )
}
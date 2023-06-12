import { useState } from "react"
import styled from "styled-components"
import { TableHeaderCell } from "./table-header-cell"

const StyledTableHeader = styled.div`
    display: flex;
    width: 100%;
    // background-color: var(--white-background);
    background-color: var(--primary-full-button-hover);

    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: 1px solid var(--secondary-text);
`
interface TableHeaderProps {
    cellSortType: HeaderTitles,
    sortCell: (cellType: HeaderTitles, dir: string) => void
}
export enum HeaderTitles {
    company = 'company',
    position = 'position',
    applied = 'applied',
    archived = 'archived',
    actions = 'actions'
}
export const TableHeader: React.FC<TableHeaderProps> = ({ sortCell, cellSortType }) => {

    const getHeaderTitles = () => {
        return Object.values(HeaderTitles)
    }
    return (
        <StyledTableHeader>
            {getHeaderTitles().map(title => {
                return <TableHeaderCell key={title}
                    txt={title}
                    sortCell={sortCell}
                    cellSortType={cellSortType} />
            })}
        </StyledTableHeader>
    )
}
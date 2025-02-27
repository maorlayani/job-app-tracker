import styled from 'styled-components'
import { Application } from '../../models/interfaces'
import { TableActionCell } from './table-action-cell'
import { TableCell } from './table-cell'
import { utilService } from '../../services/util.service'
import { useState } from 'react'

export const StyledTableRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--white-background);
    border-bottom: 1px solid #cfcfcf;
    &:hover {
        cursor: default;
        background-color: var(--secondary--button);
    }
`

interface TableRowProps {
    application: Application
}
export const TableRow: React.FC<TableRowProps> = ({ application }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const getApplicationData = () => {
        const archivedDate = application.archivedDate ? application.archivedDate : 'Not Found'
        return [
            application.company,
            application.position,
            utilService.getTimeFromNow(application.submittedAt),
            utilService.getTimeFromNow(archivedDate)
        ]
    }
    return (
        <StyledTableRow>
            {getApplicationData().map((cell, idx) => {
                return <TableCell key={cell + idx}
                    txt={cell}
                    logoUrl={application.company === cell ? application.logoUrl : ''} />
            })}
            <TableActionCell application={application} />
        </StyledTableRow>
    )
}
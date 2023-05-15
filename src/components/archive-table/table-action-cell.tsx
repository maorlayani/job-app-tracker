import styled from 'styled-components'
import { MdRestore } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { CardButton } from '../styles/buttons.styled'
import { removeApplication, updateApplication } from '../../store/reducers/tracker-slice'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { Application } from '../../models/interfaces'
import { useState } from 'react'
import { ActionModal } from '../action-modal.tsx/action-modal'

interface ArchiveButtonProps {
    afterContent?: string
}

const StyledTableActionCell = styled.div`
    display: flex;
    gap: 1em;
    width: 20%;
    min-width: 128px;
    box-sizing: border-box;
    height: 100%;
    position: relative;
    padding: 1em;
    @media (min-width: 900px) {
    }
    @media (min-width: 1050px) {
        gap: 2em;
    }
`
const ArchiveButton = styled(CardButton) <ArchiveButtonProps>`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    border-radius: 6px;
    margin: 0;
    min-width: fit-content;
    width: fit-content;
    color: #b1b1b1;
    border-color: #b1b1b1;
    &:after{
        content: "";
    }
    @media (min-width: 900px) {
        &:after{
            content: "${props => props.afterContent ? props.afterContent : ''}";
        }
    }
    &:hover {
        background-color: #ececec75;
        border: 1px solid #b1b1b1;
    }
    &:active{
        border: 1px solid #7e33bd;
    }
    svg {
        margin-inline-start: 4px;
    }
`
const ArchiveDeleteModal = styled(ActionModal)`
    width: 320px;
`
interface TableActionCellProps {
    application: Application
}

export const TableActionCell: React.FC<TableActionCellProps> = ({ application }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const dispatch = useAppDispatch()

    const onRemoveApplication = () => {
        dispatch(removeApplication(application._id))
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    const restoreApplication = () => {
        const applicationToUpdate: Application = { ...application }
        applicationToUpdate.isArchived = false
        applicationToUpdate.archivedDate = ''
        dispatch(updateApplication(applicationToUpdate))
    }

    return (
        <StyledTableActionCell>
            <ArchiveButton afterContent="Restore" onClick={restoreApplication}>
                <MdRestore />
            </ArchiveButton>
            <ArchiveButton onClick={toggleModal}>
                <RiDeleteBin6Line />
            </ArchiveButton>
            {isModalOpen && <ArchiveDeleteModal
                title="Delete Application?"
                msg="All Application information will be removed. There is no undo."
                btnTxt="Delete"
                onAction={onRemoveApplication}
                onClose={toggleModal} />}
        </StyledTableActionCell>
    )
}
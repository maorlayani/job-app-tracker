import styled from 'styled-components'
import { MdRestore } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { CardButton } from '../styles/buttons.styled'
import { removeApplication, updateApplication } from '../../store/reducers/tracker-slice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { Application } from '../../models/interfaces'
import { useState } from 'react'
import { ActionModal } from '../action-modal/action-modal'
import { RootState } from '../../store/store'

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
    color: var(--primary-button);
    border-color: var(--primary-button);
    &:after{
        content: "";
    }
    @media (min-width: 900px) {
        &:after{
            content: "${props => props.afterContent ? props.afterContent : ''}";
            margin-inline-end: ${props => props.afterContent === 'Restore' ? '5px' : ''};
        }
    }
    &:hover {
        background-color: var(--white-background);
        border: 1px solid var(--primary-unfilled-button-hover-color);
        color: var(--primary-unfilled-button-hover-color);
    }
     &:active{
        border: 1px solid var(--primary-unfilled-button-active-color);
        color: var(--primary-unfilled-button-active-color);
    }
    svg {
        margin-inline-start: 5px;
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
    const user = useAppSelector((state: RootState) => state.user.user)

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
        dispatch(updateApplication({ application: applicationToUpdate, JWT: user?.JWT }))
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
import styled from "styled-components"
import { HeaderTitles, TableHeader } from "./table-header"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"
import { TableRow } from "./table-row"
import { useEffect, useState } from "react"
import { Application } from "../../models/interfaces"
import { getApplication } from "../../store/reducers/tracker-slice"
import { RowPlaceholder } from "./row-placeholder"

const StyledArchiveTable = styled.div`
    width: 640px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--secondary-text);
    border-radius: 6px;
    box-shadow: 0 0 2px 1px var(--secondary-text);
    background-color: var(--white-background);
    & > :last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;     
    }
    margin-block-end: 30px;
    
    @media (max-width: 500px) {
        width: 640px;
    }
    @media (min-width: 800px) {
        width: 85%;
    }
`

type ApplicationTableKeys = 'company' | 'position' | 'submittedAt' | 'archivedDate'

export const ArchiveTable = () => {
    const [cellSortType, setCellSortType] = useState<HeaderTitles>('' as HeaderTitles)
    const [archiveApplications, setArchiveApplications] = useState<Application[]>([])
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const user = useAppSelector((state: RootState) => state.user.user)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!applications.length || !applications) loadApplications()
    }, [])

    useEffect(() => {
        getArchivedApplications()
    }, [applications])

    const loadApplications = async () => {
        try {
            await dispatch(getApplication(user?.JWT))
        } catch (err) {
            console.error('Cannot load cards', err)
        }
    }
    const sortCell = (cellType: HeaderTitles, dir: string) => {
        setCellSortType(cellType)
        getArchivedApplications(dir, cellType)
    }

    const getArchivedApplications = (dir: string = '', cellType: HeaderTitles = cellSortType) => {
        let sortedApplication: Application[] = [...applications]
        sortedApplication = sortedApplication.filter(app => app.isArchived)
        if (dir) {
            const updatedDirection = dir === 'up' ? -1 : 1
            const appKey = getApplicationKey(cellType)
            sortedApplication = sortedApplication.sort((a, b) => {
                if (a[appKey] < b[appKey]) return updatedDirection
                if (a[appKey] > b[appKey]) return -updatedDirection
                return 0
            })
        }
        setArchiveApplications(sortedApplication)
    }

    const getApplicationKey = (type: string): ApplicationTableKeys => {
        if (type === 'company' || type === 'position') return type
        else if (type === 'archived') return 'archivedDate'
        else return 'submittedAt'
    }

    return (
        <StyledArchiveTable>
            <TableHeader cellSortType={cellSortType} sortCell={sortCell} />
            {archiveApplications.map(app => {
                return <TableRow key={app._id} application={app} />
            })}
            {!archiveApplications.length && <RowPlaceholder msg="There are no archived applications" />}
        </StyledArchiveTable>
    )
}
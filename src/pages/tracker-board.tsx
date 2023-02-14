import { ApplicationList } from "../components/application-list"
import { SideNav } from "../components/side-nav"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getApplication, removeApplication, setFilterBy } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { ApplicationDetails } from "../components/application-details"
import { useEffect } from "react"
import { ApplicationFilter } from "../components/application-filter"


const StyledTrackerBoard = styled.div`
    display: flex;
    height: 100vh;
`
const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const TrackerBoard = () => {
    const dispatch = useAppDispatch()
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)

    useEffect(() => {
        // if (applications.length) return
        loadApplications()
    }, [filterBy.location, filterBy.position, filterBy.status, filterBy.serachInput])

    const loadApplications = async () => {
        try {
            await dispatch(getApplication())
        } catch (err) {
            console.error('Cannot load table', err)
        }
    }

    const onSetFilterBy = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        // dispatch(setFilterBy({ [ev.target.name.toLowerCase()]: ev.target.value }))
        loadApplications()
    }

    return <StyledTrackerBoard>
        <SideNav />
        <MainContentWrapper>
            <ApplicationFilter />
            {/* <ApplicationFilter onSetFilterBy={onSetFilterBy} /> */}
            <ApplicationList />
        </MainContentWrapper>
        <ApplicationDetails application={applicationDetails} />
    </StyledTrackerBoard >
}
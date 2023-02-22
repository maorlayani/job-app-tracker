import { ApplicationList } from "../components/application-list/application-list"
import { SideNav } from "../components/side-nav/side-nav"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getApplication } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { ApplicationDetails } from "../components/application-details/application-details"
import { useEffect } from "react"
import { ApplicationFilter } from "../components/filter/application-filter/application-filter"


const StyledTrackerBoard = styled.div`
    display: flex;
    height: 100vh;
`
const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  
`
export const TrackerBoard = () => {
    const dispatch = useAppDispatch()
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)
    const applications = useAppSelector((state: RootState) => state.tracker.applications)

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

    return <StyledTrackerBoard>
        <SideNav />
        <MainContentWrapper>
            <ApplicationFilter />
            <div style={{ display: 'flex', overflowY: 'auto', gap: '.5em' }}>
                <ApplicationList />
                <ApplicationDetails application={applicationDetails} />
            </div>
        </MainContentWrapper>
    </StyledTrackerBoard >
}
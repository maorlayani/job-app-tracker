import { ApplicationList } from "../components/application-list/application-list"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getApplication, setCurrentApplicationDetails } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { ApplicationDetails } from "../components/application-details/application-details"
import { useEffect } from "react"
import { ApplicationFilter } from "../components/filter/application-filter/application-filter"
import { Outlet } from "react-router-dom"
import background from '../assets/svg/stacked-peaks-haikei-1.svg'
import Globalfonts from '../assets/global-fonts'


const StyledTrackerBoard = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    /* background-image: url(${background}); */
    background-image: linear-gradient(45deg, #D4DCE1, #fff);
    background-size: cover;
    background-position: center;
    /* background-color: '#ffffffeb'; */
`
const MainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-block-start: 70px;
`
export const TrackerBoard = () => {
    const dispatch = useAppDispatch()
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)
    const applications = useAppSelector((state: RootState) => state.tracker.applications)

    useEffect(() => {
        // if (applications.length) return
        loadApplications()
    }, [filterBy.location, filterBy.position, filterBy.status, filterBy.searchInput])

    const loadApplications = async () => {
        try {
            await dispatch(getApplication())
        } catch (err) {
            console.error('Cannot load table', err)
        }
    }

    return <>
        <StyledTrackerBoard>
            <Globalfonts />
            <MainContentWrapper>
                <ApplicationFilter />
                <div style={{ display: 'flex', overflowY: 'auto', gap: '.5em' }}>
                    <ApplicationList />
                    {/* {applications.length > 0 && <ApplicationDetails />} */}
                </div>
            </MainContentWrapper>
        </StyledTrackerBoard >
        <Outlet />
    </>
}
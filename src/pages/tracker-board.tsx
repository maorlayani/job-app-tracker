import { ApplicationList } from "../components/application-list"
import { SideNav } from "../components/side-nav"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getApplication, removeApplication, } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { ApplicationDetails } from "../components/application-details"
import { useEffect } from "react"


const StyledTrackerBoard = styled.div`
    display: flex;
    height: 100vh;
`

export const TrackerBoard = () => {
    const dispatch = useAppDispatch()
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)

    useEffect(() => {
        if (applications.length) return
        loadApplications()
    }, [])

    const loadApplications = async () => {
        try {
            await dispatch(getApplication())
        } catch (err) {
            console.error('Cannot load table', err)
        }
    }

    // const onRemoveApplication: (id: string) => void = (id) => {
    //     dispatch(removeApplication(id))
    // }

    return <StyledTrackerBoard>
        <SideNav />
        <ApplicationList />
        <ApplicationDetails application={applicationDetails} />
    </StyledTrackerBoard >
}
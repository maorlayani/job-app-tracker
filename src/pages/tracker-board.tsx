import { ApplicationList } from "../components/application-list"
import { SideNav } from "../components/side-nav"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { removeApplication, } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { ApplicationDetails } from "../components/application-details"


const StyledTrackerBoard = styled.div`
    display: flex;
    height: 100vh;
`

export const TrackerBoard = () => {

    // const dispatch = useAppDispatch()
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)

    // const onRemoveApplication: (id: string) => void = (id) => {
    //     dispatch(removeApplication(id))
    // }
    return <StyledTrackerBoard>
        <SideNav />
        <ApplicationList />
        <ApplicationDetails application={applicationDetails} />
    </StyledTrackerBoard >
}
import { CardList } from "../components/card-list/card-list"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getApplication } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import React, { useEffect } from "react"
import { ApplicationFilter } from "../components/filter/application-filter/application-filter"
import { Outlet } from "react-router-dom"
import background from '../assets/svg/stacked-peaks-haikei-1.svg'
import Globalfonts from '../assets/global-fonts'
import { ActivityLog } from "../components/activity-log/activity-log"
import { UserSideBar } from "../components/user-side-bar/user-side-bar"

const StyledTrackerBoard = styled.div`
    display: flex;
    min-height: calc(100vh - 70px);
    background-image: linear-gradient(45deg, #D4DCE1, #fff);
    background-size: cover;
    background-position: center;
`
const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const CardListContainer = styled.div`
    display: flex;
    gap: .5em;
`

export const TrackerBoard = () => {
    const dispatch = useAppDispatch()
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)

    useEffect(() => {
        loadApplications()
    }, [filterBy.location, filterBy.position, filterBy.status, filterBy.searchInput])

    const loadApplications = async () => {
        try {
            await dispatch(getApplication())
        } catch (err) {
            console.error('Cannot load cards', err)
        }
    }

    return (
        <React.Fragment>
            <StyledTrackerBoard>
                {/* <Globalfonts /> */}
                <UserSideBar />
                <MainContentContainer>
                    <ApplicationFilter />
                    <CardListContainer>
                        <CardList />
                    </CardListContainer>
                </MainContentContainer>
                {/* <ActivityLog /> */}
            </StyledTrackerBoard>
            <Outlet />
        </React.Fragment>
    )
}
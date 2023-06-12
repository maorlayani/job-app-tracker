import { CardList } from "../components/card-list/card-list"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { getApplication } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import React, { useEffect } from "react"
import { ApplicationFilter } from "../components/filter/application-filter/application-filter"
import { Outlet } from "react-router-dom"
import { UserSideBar } from "../components/user-side-bar/user-side-bar"

const StyledTrackerBoard = styled.div`
    display: flex;
    min-height: calc(100vh - 70px);
    background-color: var(--background);
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
    margin: 0 3rem;
`

export const TrackerBoard = () => {
    const dispatch = useAppDispatch()
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)
    const user = useAppSelector((state: RootState) => state.user.user)

    useEffect(() => {
        loadApplications()
    }, [filterBy.location, filterBy.position, filterBy.status, filterBy.searchInput, user])

    const loadApplications = async () => {
        try {
            await dispatch(getApplication(user?.JWT))
        } catch (err) {
            console.error('Cannot load cards', err)
        }
    }

    return (
        <React.Fragment>
            <StyledTrackerBoard>
                <UserSideBar />
                <MainContentContainer>
                    <ApplicationFilter />
                    <CardListContainer>
                        <CardList />
                    </CardListContainer>
                </MainContentContainer>
            </StyledTrackerBoard>
            <Outlet />
        </React.Fragment>
    )
}
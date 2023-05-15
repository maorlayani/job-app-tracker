import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"
import { ApplicationLoader } from "../application-loader/application-loader"
import { Card } from "../card/card"

const StyledCardList = styled.div`
    padding:  .5em ;
    overflow-y: auto;
    margin: 0 0 1.5em 0;
    scroll-behavior: smooth;
`

const CardListTitle = styled.span`
    // font-family: 'league-spartan-bold'; 
    color: #18121dd2;
    margin-block-end: .5em;
    display: block;
`

const CardListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 500px;
    margin-block-end: 20px;
    @media (min-width: 800px) {
        width: 750px;
    }
    @media (min-width: 1050px) {
        width: 1000px;
    }
    @media (min-width: 1270px) {
        justify-content: flex-start;
        width: 1240px;
    }
`
export const CardList = () => {
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const isLoading = useAppSelector((state: RootState) => state.tracker.isLoading)
    const [isPinned, setIsPinned] = useState(false)

    useEffect(() => {
        if (applications.some(app => app.isPinned === true)) setIsPinned(true)
        else if (isPinned) setIsPinned(false)
    }, [applications])

    const filteredApplicationByPinned = (isPinned: boolean) => {
        let pinnedApplications
        if (isPinned) {
            pinnedApplications = applications.filter(app => app.isPinned && !app.isArchived)
            return pinnedApplications
        }
        return applications.filter(app => !app.isPinned && !app.isArchived)
    }

    return (
        <StyledCardList>
            {isLoading && <ApplicationLoader />}
            {isPinned && <React.Fragment>
                <CardListTitle>Pinned Applications</CardListTitle>
                <CardListUl>
                    {filteredApplicationByPinned(true).map(app => {
                        return <Card key={app._id} application={app} />
                    })}
                </CardListUl>
            </React.Fragment>}
            {isPinned && <CardListTitle>Other Applications</CardListTitle>}
            <CardListUl>
                {filteredApplicationByPinned(false).map(app => {
                    return <Card key={app._id} application={app} />
                })}
            </CardListUl>
        </StyledCardList>
    )
}
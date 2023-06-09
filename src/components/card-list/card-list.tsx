import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"
import { ApplicationLoader } from "../application-loader/application-loader"
import { Card } from "../card/card"
import { CardPlaceholder } from "../card/card-placeholder"

const StyledCardList = styled.div`
    padding:  .5em ;
    overflow-y: auto;
    margin: 0 0 1.5em 0;
    scroll-behavior: smooth;
`

const CardListTitle = styled.span`
    color: #18121dd2;
    margin-block-end: .5em;
    display: block;
`

const CardListUl = styled.ul`
    margin-block-end: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    @media (max-width: 500px) {
        grid-gap: 1em;
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1270px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
export const CardList = () => {
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const loading = useAppSelector((state: RootState) => state.tracker.loading)
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
    const checkIsActiveApplication = () => {
        const activeApplication = applications.filter(app => !app.isArchived)
        return activeApplication.length === 0 || applications.length === 0
    }
    if (checkIsActiveApplication()) return <CardPlaceholder />
    return (
        <StyledCardList>
            {isPinned && <React.Fragment>
                <CardListTitle>Pinned Applications</CardListTitle>
                <CardListUl>
                    {loading.type === 'add' && loading.isLoading && isPinned && <ApplicationLoader />}
                    {filteredApplicationByPinned(true).map(app => {
                        return <Card key={app._id} application={app} />
                    })}
                </CardListUl>
            </React.Fragment>}
            {isPinned && <CardListTitle>Other Applications</CardListTitle>}
            <CardListUl>
                {loading.type === 'add' && loading.isLoading && !isPinned && <ApplicationLoader />}
                {filteredApplicationByPinned(false).map(app => {
                    return <Card key={app._id} application={app} />
                })}
            </CardListUl>
        </StyledCardList>
    )
}
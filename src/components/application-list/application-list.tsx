import styled from "styled-components"
import { useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"
import { ApplicationLoader } from "../application-loader/application-loader"
import { ApplicationPreview } from "../application-preview/application-preview"
import { ApplicationListStyle, StyledListTitle } from "./styled-application-list"


const ListUl = styled.ul`
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
export const ApplicationList = () => {

    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const isLoading = useAppSelector((state: RootState) => state.tracker.isLoading)

    const filteredApplicationByIsPinned = (isPinned: boolean) => {
        let pinnedApplications
        if (isPinned) {
            pinnedApplications = applications.filter(app => app.isPinned)
            return pinnedApplications
        }
        return applications.filter(app => !app.isPinned)
    }

    return <ApplicationListStyle>
        {isLoading && <ApplicationLoader />}
        {filteredApplicationByIsPinned(true)[0] && <>
            <StyledListTitle>Pinned Applications</StyledListTitle>
            <ListUl >
                {filteredApplicationByIsPinned(true).map(app => {
                    return <ApplicationPreview key={app._id} application={app} />
                })}
            </ListUl>
        </>}
        {filteredApplicationByIsPinned(true)[0] && <StyledListTitle>Other Applications</StyledListTitle>}
        <ListUl >
            {filteredApplicationByIsPinned(false).map(app => {
                return <ApplicationPreview key={app._id} application={app} />
            })}
        </ListUl>
    </ApplicationListStyle>
}
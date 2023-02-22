import { useAppSelector } from "../../hooks/redux-hooks"
import { RootState } from "../../store/store"
import { ApplicationLoader } from "../application-loader/application-loader"
import { ApplicationPreview } from "../application-preview/application-preview"
import { ApplicationListStyle, StyledListTitle } from "./styled-application-list"

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
            <ul>
                {filteredApplicationByIsPinned(true).map(app => {
                    return <ApplicationPreview key={app.id} application={app} />
                })}
            </ul>
        </>}
        {filteredApplicationByIsPinned(true)[0] && <StyledListTitle>Other Applications</StyledListTitle>}
        <ul>
            {filteredApplicationByIsPinned(false).map(app => {
                return <ApplicationPreview key={app.id} application={app} />
            })}
        </ul>
    </ApplicationListStyle>
}
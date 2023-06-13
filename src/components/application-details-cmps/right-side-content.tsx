import styled from 'styled-components'
import { ApplicationKeys } from '../../models/enums'
import { Application } from '../../models/interfaces'
import { utilService } from '../../services/util.service'
import { DetailsMap } from './details-map'
import { DetailsTag } from './details-tag'

const StyledRightSideContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5em;
    @media (min-width: 650px) {
        flex-direction: row;
    }
`
const MapContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
interface RightSideContentProps {
    application: Application,
    onUpdateApplication: (applicationToUpdate: Application) => void
}
export const RightSideContent: React.FC<RightSideContentProps> = ({ application, onUpdateApplication }) => {
    return (
        <StyledRightSideContent>
            <MainContainer>
                <DetailsTag title='Company'
                    application={application}
                    content={application.company}
                    name={ApplicationKeys.company}
                    onUpdateApplication={onUpdateApplication} />
                <DetailsTag title='Position'
                    application={application}
                    content={application.position}
                    name={ApplicationKeys.position}
                    onUpdateApplication={onUpdateApplication} />
            </MainContainer>
            <MainContainer>
                <DetailsTag title='Posted Date'
                    application={application}
                    content={utilService.dateToString(application.postedDate)}
                    name={ApplicationKeys.postedDate}
                    onUpdateApplication={onUpdateApplication} />
                <DetailsTag title='Applied Date'
                    application={application}
                    content={utilService.dateToString(application.submittedAt)}
                    name={ApplicationKeys.submittedAt}
                    onUpdateApplication={onUpdateApplication} />
            </MainContainer>
            <MapContainer>
                <DetailsMap application={application} onUpdateApplication={onUpdateApplication} />
            </MapContainer>
        </StyledRightSideContent>
    )
}
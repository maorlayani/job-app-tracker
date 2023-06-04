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
    application: Application
}
export const RightSideContent: React.FC<RightSideContentProps> = ({ application }) => {

    const dateToString = (date: number | undefined): string => {
        if (typeof date === 'number') {
            let formattedDate = new Date(date)
            return formattedDate.toLocaleDateString('en-GB')
        }
        return 'Not Found'
    }
    return (
        <StyledRightSideContent>
            <MainContainer>
                <DetailsTag title='Company'
                    application={application}
                    content={application.company}
                    name={ApplicationKeys.company} />
                <DetailsTag title='Position'
                    application={application}
                    content={application.position}
                    name={ApplicationKeys.position} />
            </MainContainer>
            <MainContainer>
                <DetailsTag title='Posted Date'
                    application={application}
                    content={dateToString(application.postedDate)}
                    name={ApplicationKeys.postedDate} />
                <DetailsTag title='Applied Date'
                    application={application}
                    content={dateToString(application.submittedAt)}
                    name={ApplicationKeys.submittedAt} />
            </MainContainer>
            <MapContainer>
                <DetailsMap application={application} />
            </MapContainer>
        </StyledRightSideContent>
    )
}
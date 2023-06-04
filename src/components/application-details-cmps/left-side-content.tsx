import styled from 'styled-components'
import { ApplicationKeys } from '../../models/enums'
import { Application } from '../../models/interfaces'
import { utilService } from '../../services/util.service'
import { ContactTag } from './contact-tag'
import { DetailsTag } from './details-tag'

const StyledLeftSideContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline-end: 3em;
   width: 100%;
    box-sizing: border-box;
    @media (min-width: 650px) {
        min-width: 35%;
    max-width: 35%;
    }
`
interface LeftSideContentProps {
    application: Application
}
export const LeftSideContent: React.FC<LeftSideContentProps> = ({ application }) => {
    return (
        <StyledLeftSideContent>
            <DetailsTag title='Application status'
                application={application}
                content={application.status}
                name={ApplicationKeys.status} />
            {application.submittedVia &&
                <DetailsTag title='Applied Via'
                    application={application}
                    content={application.submittedVia}
                    name={ApplicationKeys.submittedVia} />}
            {application.experience !== undefined &&
                <DetailsTag title='Experience required'
                    application={application}
                    content={utilService.checkIsPlural(application.experience, 'year')}
                    name={ApplicationKeys.experience} />}
            {application.positionUrl !== undefined &&
                <DetailsTag title='Position URL'
                    application={application}
                    content={application.positionUrl}
                    name={ApplicationKeys.positionUrl} />}
            {application.contact !== undefined &&
                <ContactTag contactDetails={application.contact} />}
        </StyledLeftSideContent>
    )
}
import styled from 'styled-components'
import { ApplicationKeys } from '../../models/enums'
import { Application } from '../../models/interfaces'
import { utilService } from '../../services/util.service'
import { ContactTag } from './contact-tag'
import { DetailsTag } from './details-tag'
import { ResumeTag } from './resume-tag'

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
    application: Application,
    onUpdateApplication: (applicationToUpdate: Application) => void
}
export const LeftSideContent: React.FC<LeftSideContentProps> = ({ application, onUpdateApplication }) => {
    return (
        <StyledLeftSideContent>
            <DetailsTag title='Application status'
                application={application}
                content={application.status}
                name={ApplicationKeys.status}
                onUpdateApplication={onUpdateApplication} />
            {application.submittedVia &&
                <DetailsTag title='Applied Via'
                    application={application}
                    content={application.submittedVia}
                    name={ApplicationKeys.submittedVia}
                    onUpdateApplication={onUpdateApplication} />}
            {application.experience !== undefined &&
                <DetailsTag title='Experience required'
                    application={application}
                    content={utilService.checkIsPlural(application.experience, 'year')}
                    name={ApplicationKeys.experience}
                    onUpdateApplication={onUpdateApplication} />}
            {application.positionUrl !== undefined &&
                <DetailsTag title='Position URL'
                    application={application}
                    content={application.positionUrl}
                    name={ApplicationKeys.positionUrl}
                    onUpdateApplication={onUpdateApplication} />}
            {application.contact !== undefined &&
                <ContactTag
                    contactDetails={application.contact}
                    application={application}
                    onUpdateApplication={onUpdateApplication} />}
            {application.resume && <ResumeTag file={application.resume} />}
        </StyledLeftSideContent>
    )
}
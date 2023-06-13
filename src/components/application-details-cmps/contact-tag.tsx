import styled from 'styled-components'
import { Application, Contact } from '../../models/interfaces'
import { SocailContainer, SocialIcon, SocialLink } from './details-header/styled.details-header'
import { DetailsTag, StyledDetailsTag, TagContent, TagTitle } from './details-tag'
import FacebookIcon from '../../assets/svg/social/facebook.svg'
import LinkedinIcon from '../../assets/svg/social/linkedin.svg'
import TwitterIcon from '../../assets/svg/social/twitter.svg'
import { ContactKeys } from '../../models/enums'
import { DetailsContactTag } from './details-contact-tag'

const StyledContactTag = styled(StyledDetailsTag)`

`
const ContatTagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
`
const ContactTagTitle = styled(TagTitle)`
    width: 50px;
    font-size: .9em;
`
const ContactTagContent = styled(TagContent)`
    font-size: .9em;
    min-width: unset;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    a {
        width: 20px;
        height: 20px;
        margin-inline-start: .8em;
    }
`
interface ContactTagProps {
    contactDetails: Contact,
    application: Application,
    onUpdateApplication: (applicationToUpdate: Application) => void
}
export const ContactTag: React.FC<ContactTagProps> = ({ application, contactDetails, onUpdateApplication }) => {

    return (
        <StyledContactTag>
            <TitleContainer>
                <TagTitle>Contact</TagTitle>
                {contactDetails.linkedin && <SocialLink href={contactDetails.linkedin} target="_blank">
                    <SocialIcon src={LinkedinIcon}></SocialIcon>
                </SocialLink>}
            </TitleContainer>
            <DetailsContactTag title='Name'
                application={application}
                contact={contactDetails}
                name={ContactKeys.name}
                onUpdateApplication={onUpdateApplication} />
            <DetailsContactTag title='Email'
                application={application}
                contact={contactDetails}
                name={ContactKeys.email}
                onUpdateApplication={onUpdateApplication} />
            <DetailsContactTag title='Phone'
                application={application}
                contact={contactDetails}
                name={ContactKeys.phone}
                onUpdateApplication={onUpdateApplication} />
            <DetailsContactTag title='Linkedin'
                application={application}
                contact={contactDetails}
                name={ContactKeys.linkedin}
                onUpdateApplication={onUpdateApplication} />
        </StyledContactTag>
    )
}
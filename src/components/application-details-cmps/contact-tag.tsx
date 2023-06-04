import styled from 'styled-components'
import { Contact } from '../../models/interfaces'
import { SocailContainer, SocialIcon, SocialLink } from './details-header/styled.details-header'
import { StyledDetailsTag, TagContent, TagTitle } from './details-tag'
import FacebookIcon from '../../assets/svg/social/facebook.svg'
import LinkedinIcon from '../../assets/svg/social/linkedin.svg'
import TwitterIcon from '../../assets/svg/social/twitter.svg'

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
    contactDetails: Contact
}
export const ContactTag: React.FC<ContactTagProps> = ({ contactDetails }) => {

    return (
        <StyledContactTag>
            <TitleContainer>
                <TagTitle>Contact</TagTitle>
                {contactDetails.linkedin && <SocialLink href={contactDetails.linkedin} target="_blank">
                    <SocialIcon src={LinkedinIcon}></SocialIcon>
                </SocialLink>}
            </TitleContainer>
            {contactDetails.name && <ContatTagContainer>
                <ContactTagTitle>Name</ContactTagTitle>
                <ContactTagContent>{contactDetails.name}</ContactTagContent>
            </ContatTagContainer>}
            {contactDetails.email && <ContatTagContainer>
                <ContactTagTitle>Email</ContactTagTitle>
                <ContactTagContent>{contactDetails.email}</ContactTagContent>
            </ContatTagContainer>}
            {contactDetails.phone && <ContatTagContainer>
                <ContactTagTitle>Phone</ContactTagTitle>
                <ContactTagContent>{contactDetails.phone}</ContactTagContent>
            </ContatTagContainer>}
        </StyledContactTag>
    )
}
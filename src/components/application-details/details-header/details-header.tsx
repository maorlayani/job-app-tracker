import { useNavigate } from "react-router-dom"
import { utilService } from "../../../services/util.service"
import { StyledHorizontalLine } from "../../styles/horizontal-line.styled"
import { StyledTagContent } from "../styled-application-details"
import { SocailContainer, SocialIcon, SocialLink, StyledCloseIcon, StyledCompanyLogoAppDetails, StyledCompanyNameAppDetails, StyledDetailsHeader, StyledPositionAppDetails, StyledTimeTag } from "./styled.details-header"
import closeIcon from '../../../assets/svg/close-icon.svg'
import { DetailsHeaderProps } from "./interface-details-header"
import FacebookIcon from '../../../assets/svg/social/facebook.svg'
import LinkedinIcon from '../../../assets/svg/social/linkedin.svg'
import TwitterIcon from '../../../assets/svg/social/twitter.svg'
import InstagramIcon from '../../../assets/svg/social/instagram.svg'
import CrunchbaseIcon from '../../../assets/svg/social/crunchbase.svg'

export const DetailsHeader: React.FC<DetailsHeaderProps> = ({ application, isFullDetails }) => {
    const navigate = useNavigate()

    const onCloseDetails = () => {
        navigate('/tracker')
    }

    const getSocialIcon = (socialName: string) => {
        switch (socialName) {
            case 'linkedin':
                return LinkedinIcon
            case 'facebook':
                return FacebookIcon
            case 'instagram':
                return InstagramIcon
            case 'twitter':
                return TwitterIcon
            case 'crunchbase':
                return CrunchbaseIcon
        }
    }

    return <StyledDetailsHeader>
        {isFullDetails && <StyledCloseIcon>
            <img src={closeIcon} alt="close icon" onClick={onCloseDetails} />
        </StyledCloseIcon>}
        <StyledCompanyLogoAppDetails logoUrl={application.logoUrl}></StyledCompanyLogoAppDetails>
        <StyledPositionAppDetails>{application.position}</StyledPositionAppDetails>
        <StyledCompanyNameAppDetails>
            {`${application.company}, ${application.location} | `}
            <StyledTimeTag>
                Submitted {utilService.getTimeFromNow(application.submittedAt)}
            </StyledTimeTag>
            {/* <h1 style={{ color: '#5B6F87', fontSize: '40px', padding: '10px', background: '#fff' }}>Test</h1>
            <h1 style={{ color: '#7B8F9D', fontSize: '40px', padding: '10px', background: '#fff' }}>Test</h1>
            <h1 style={{ color: '#9CA3A9', fontSize: '40px', padding: '10px', background: '#fff' }}>Test</h1>
            <h1 style={{ color: '#B8C2CC', fontSize: '40px', padding: '10px', background: '#fff' }}>Test</h1>
            <h1 style={{ color: '#D4DCE1', fontSize: '40px', padding: '10px', background: '#fff' }}>Test</h1> */}

        </StyledCompanyNameAppDetails>
        <SocailContainer>
            {application.links?.map(link =>
                <SocialLink href={link.url} target="_blank">
                    <SocialIcon src={getSocialIcon(link.name)}></SocialIcon>
                </SocialLink>)}
        </SocailContainer>
        <StyledHorizontalLine></StyledHorizontalLine>
    </StyledDetailsHeader>
}

// fdfbff

// e6d4f2
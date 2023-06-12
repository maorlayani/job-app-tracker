import { useNavigate } from "react-router-dom"
import { utilService } from "../../../services/util.service"
import { StyledHorizontalLine } from "../../styles/horizontal-line.styled"
import { SocailContainer, SocialIcon, SocialLink, StyledCloseIcon, StyledCompanyLogoAppDetails, StyledCompanyNameAppDetails, StyledDetailsHeader, StyledPositionAppDetails, StyledTimeTag } from "./styled.details-header"
import closeIcon from '../../../assets/svg/close-icon.svg'
import { DetailsHeaderProps } from "./interface-details-header"
import FacebookIcon from '../../../assets/svg/social/facebook.svg'
import LinkedinIcon from '../../../assets/svg/social/linkedin.svg'
import TwitterIcon from '../../../assets/svg/social/twitter.svg'
import InstagramIcon from '../../../assets/svg/social/instagram.svg'
import CrunchbaseIcon from '../../../assets/svg/social/crunchbase.svg'
import GithubIcon from '../../../assets/svg/social/github.svg'
import YoutubeIcon from '../../../assets/svg/social/youtube.svg'

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
            case 'github':
                return GithubIcon
            case 'youtube':
                return YoutubeIcon
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
                Applied {utilService.getTimeFromNow(application.submittedAt)}
            </StyledTimeTag>
        </StyledCompanyNameAppDetails>
        <SocailContainer>
            {application.links?.map(link =>
                <SocialLink key={link.name} href={link.url} target="_blank">
                    <SocialIcon src={getSocialIcon(link.name)}></SocialIcon>
                </SocialLink>)}
        </SocailContainer>
        <StyledHorizontalLine></StyledHorizontalLine>
    </StyledDetailsHeader>
}
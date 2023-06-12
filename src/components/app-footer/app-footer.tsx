import styled from 'styled-components'
import LinkedinIcon from '../../assets/svg/social/linkedin.svg'
import GithubIcon from '../../assets/svg/social/github.svg'

const StyledAppFooter = styled.footer`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    background-color: var(--footer-background);
`

const StyledSpan = styled.span`
    color: var(--primary-text);
`
const SocialLink = styled.a`
    width: 20px;
    height: 20px;
    border-radius: 12px;
`

const SocialIcon = styled.img`
    width: 100%;
    height: 100%;
`
export const AppFooter = () => {
    return (
        <StyledAppFooter>
            <StyledSpan>Created by Maor Layani</StyledSpan>
            <SocialLink href='https://www.linkedin.com/in/maor-layani/' target="_blank">
                <SocialIcon src={LinkedinIcon}></SocialIcon>
            </SocialLink>
            <SocialLink href='https://github.com/maorlayani/job-app-tracker-frontend' target="_blank">
                <SocialIcon src={GithubIcon}></SocialIcon>
            </SocialLink>
        </StyledAppFooter>
    )
}
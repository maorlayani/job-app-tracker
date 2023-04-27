import styled from "styled-components";
import { StyledCompanyLogo } from "../../styles/company-logo.styled";
import { StyledCompanyName } from "../../styles/company-name.styled";
import { ImgCloseIconContainer } from "../../styles/img-close-icon-container";
import { StyledPosition } from "../../styles/position.styled";
import { StyledTagContent } from "../styled-application-details";

export const StyledDetailsHeader = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block-end: 1em;
`

export const StyledCloseIcon = styled(ImgCloseIconContainer)`
    position: absolute;
    left: 95%;
    img{
        width: 25px;
        height: 25px;
    }
`

export const StyledCompanyLogoAppDetails = styled(StyledCompanyLogo)`
    max-width: 75px;
    min-width: 75px;
    max-height: 75px;
    min-height: 75px;
    border: 0.5px solid #ae84d1;
    margin: 1em 0;
`

export const StyledPositionAppDetails = styled(StyledPosition)`
    font-size: 1.3em;
    margin-block-end: .1em;
`

export const StyledCompanyNameAppDetails = styled(StyledCompanyName)`
    font-size: 0.9em;
    color:  #574268d2;
    margin-block-end: .5em;
`

export const StyledTimeTag = styled(StyledTagContent)`
    color: #5ba4a4;
`

export const SocailContainer = styled.div`
    display: flex;
    gap: 1em;
    margin-block-end: .5em;
`
export const SocialLink = styled.a`
    width: 30px;
    height: 30px;
    border-radius: 12px;
`

export const SocialIcon = styled.img`
width: 100%;
height: 100%;
`
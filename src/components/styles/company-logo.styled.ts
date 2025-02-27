import styled from "styled-components";

interface StyledCompanyLogoProps {
    logoUrl: string | undefined
}

export const StyledCompanyLogo = styled.div<StyledCompanyLogoProps>`
    color:#fff;
    border-radius: 12px;
    min-width: 65px;
    min-height: 65px;
    // max-width: 65px;
    // max-height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    background-image: url(${props => props.logoUrl});
    background-position:center;
    background-repeat: no-repeat;
    background-size: 100%;
    box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    margin-block-end: 12px;
`
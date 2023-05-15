import styled from "styled-components"
import { StyledCompanyLogo } from "../styles/company-logo.styled"
import { FrontCardProps } from "./interfaces-front-card"

const CompanyLogoContainer = styled.div`
    border-block-end: 1px solid lightgray;
    width: 100%;
    justify-content: center; 
    display: flex;
`
export const FrontCardLogo: React.FC<FrontCardProps> = ({ application, className, ...props }) => {
    return (
        <CompanyLogoContainer className={className} {...props}>
            <StyledCompanyLogo logoUrl={application.logoUrl}></StyledCompanyLogo>
        </CompanyLogoContainer>
    )
}

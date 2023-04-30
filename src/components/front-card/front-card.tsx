import { BsFillBookmarkDashFill } from "react-icons/bs"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { Application } from "../../models/interfaces"
import { setCurrentApplicationDetails, updateApplication } from "../../store/reducers/tracker-slice"
import { PreviewContainer, PreviewContentContainer, PreviewIconsWrapper, RowContainer, StyledIcon, StyledTag } from "../application-preview/styled-application-preview"
import Globalfonts from '../../assets/global-fonts'
import { StyledCompanyLogo } from "../styles/company-logo.styled"
import { StyledCompanyName } from "../styles/company-name.styled"
import { StyledPosition } from "../styles/position.styled"
import { HiLocationMarker } from "react-icons/hi"
import { BiCodeAlt } from "react-icons/bi"
import { utilService } from "../../services/util.service"
import { AiFillInfoCircle } from "react-icons/ai"
import styled from "styled-components"
import { StyledButton } from "../styles/button.styled"
import { useNavigate } from "react-router-dom"
import { Card } from "../styles/card.styled"

interface FrontCardProps {
    application: Application
}
const FrontCardButton = styled(StyledButton)`
    border-radius: 12px;
    padding: 8px;
    width: 150px;
    margin-block-start: 20px;
`
const CompanyLogoContainer = styled.div`
    border-block-end: 1px solid lightgray;
    width: 100%;
    justify-content: center; 
    display: flex;
`

const StyledFrontCard = styled(Card)`
`
export const FrontCard: React.FC<FrontCardProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const togglePinApplication = (ev: React.MouseEvent<HTMLDivElement>) => {
        ev.stopPropagation()
        const applicationToUpdate: Application = { ...application }
        applicationToUpdate.isPinned = !application.isPinned
        dispatch(updateApplication(applicationToUpdate))
    }
    const onSetAppliction: (application: Application) => void = (application) => {
        dispatch(setCurrentApplicationDetails(application))
        navigate(`/tracker/${application._id}`)
    }
    const onOpenDetaisModal = (ev: React.MouseEvent<HTMLElement>) => {
        ev.stopPropagation()
        onSetAppliction(application)
    }
    return (
        <StyledFrontCard>
            <PreviewIconsWrapper>
                <StyledIcon isMarked={application.isPinned} onClick={togglePinApplication} title="Pinned">
                    <BsFillBookmarkDashFill />
                </StyledIcon>
            </PreviewIconsWrapper>
            <PreviewContainer>
                <Globalfonts />
                <CompanyLogoContainer>
                    <StyledCompanyLogo logoUrl={application.logoUrl}></StyledCompanyLogo>
                </CompanyLogoContainer>
                <PreviewContentContainer>
                    <StyledCompanyName>{application.company}</StyledCompanyName>
                    <StyledPosition>{application.position}</StyledPosition>
                    <RowContainer>
                        <HiLocationMarker />
                        <StyledTag>{application.location}</StyledTag>
                        <BiCodeAlt />
                        {application.experience !== undefined && <StyledTag>{utilService.checkIsPlural(application.experience, 'year')} experience</StyledTag>}
                        <AiFillInfoCircle />
                        <StyledTag>{application.status}</StyledTag>
                    </RowContainer>
                </PreviewContentContainer>
                <FrontCardButton onClick={onOpenDetaisModal}>More Details</FrontCardButton>
            </PreviewContainer>
        </StyledFrontCard>
    )
}
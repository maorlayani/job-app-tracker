import { useAppDispatch } from "../../hooks/redux-hooks"
import { Application } from "../../models/interfaces"
import { setCurrentApplicationDetails } from "../../store/reducers/tracker-slice"
import Globalfonts from '../../assets/global-fonts'
import { StyledCompanyName } from "../styles/company-name.styled"
import { StyledPosition } from "../styles/position.styled"
import styled from "styled-components"
import { CardButton } from "../styles/buttons.styled"
import { useNavigate } from "react-router-dom"
import { CardFace } from "../styles/card.styled"
import { FrontCardProps } from "./interfaces-front-card"
import { FrontCardIcons } from "./front-card-icons"
import { FrontCardLogo } from "./front-card-logo"
import { FrontCardContent } from "./front-card-content"

const StyledFrontCard = styled(CardFace)`
`

const FrontCardMainContent = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    padding: 0 2em 2em 2em;
    flex-direction: column;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    gap: 8px;
`
const FrontCardButton = styled(CardButton)`
    margin: 0;
    transition-property: background-color,border, color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
`

export const FrontCard: React.FC<FrontCardProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

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
            <FrontCardIcons application={application} />
            <FrontCardMainContent>
                <FrontCardLogo application={application} />
                <ContentContainer>
                    <StyledCompanyName>{application.company}</StyledCompanyName>
                    <StyledPosition>{application.position}</StyledPosition>
                    <FrontCardContent application={application} />
                </ContentContainer>
                <FrontCardButton onClick={onOpenDetaisModal}>More Details</FrontCardButton>
            </FrontCardMainContent>
        </StyledFrontCard>
    )
}
import { application } from '../interfaces/trakcer'
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { removeApplication, toggleApplicationDetails } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { StyledCompanyLogo } from './styles/company-logo.styled'
import { StyledPosition } from './styles/position.styled'
import { StyledCompanyName } from './styles/company-name.styled'
import { StyledHorizontalLine } from './styles/horizontal-line.styled'
import { StyledButton } from './styles/button.styled'
import { FiEdit2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
interface ApplicationDetailsProps {
    application: application
}

interface StyledApplicationDetailsProps {
    isOpen: boolean
}

const StyledApplicationDetails = styled.div<StyledApplicationDetailsProps>`
    background-color: #fff;
    width: 400px;
    height: 500px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-family: 'league-spartan-medium';
    position: absolute;
    top: 20px;
    right: ${props => props.isOpen ? '0' : '-400px'};
    box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    transition: right 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em;
    box-sizing: border-box;
    `

const StyledTag = styled.span`
    font-size: 1.15em;
    color: #2c3a3a;
  `

const StyledTagContent = styled.span`
    color: #5ba4a4;
  `

const StyledUl = styled.ul`
align-self: flex-start;
`

const StyledCompanyLogoAppDetails = styled(StyledCompanyLogo)`
    max-width: 85px;
    min-width: 85px;
    max-height: 85px;
    min-height: 85px;
    border: 0.5px solid #ae84d1;
    margin: 1em 0;
`
const StyledPositionAppDetails = styled(StyledPosition)`
    font-size: 1.3em;
    margin-block-end: .1em;
`

const StyledCompanyNameAppDetails = styled(StyledCompanyName)`
    font-size: 0.9em;
    color:  #574268d2;
    margin-block-end: .5em;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 2em;
`
const StyledRemoveButton = styled(StyledButton)`
    border: 1px solid #ae84d1;
    color: #ae84d1;
    background-color: #fff;
        &:hover{
            color: #b592d1bb;
            border: 1px solid #b592d1bb;
            background-color: unset;
        }
        &:active{
            border: 1px solid #ae84d1;
            color: #ae84d1;
            background-color: unset;
        }
`

export const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const isDetailsOpen = useAppSelector((state: RootState) => state.tracker.isDetailsOpen)
    const navigate = useNavigate()

    const onCloseDetails = () => {
        dispatch(toggleApplicationDetails())
    }

    const onRemoveApplication = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        dispatch(removeApplication(application.id))
        dispatch(toggleApplicationDetails())
    }

    const onUpdateApplication = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        navigate(`/edit/${application.id}`)
        onCloseDetails()
    }

    const getFormatedDate = (date: number) => {
        const dateFormat = new Date(date)
        return dateFormat.toLocaleString('he-IL', { dateStyle: 'short' })
    }

    return <StyledApplicationDetails isOpen={isDetailsOpen} onClick={onCloseDetails}>
        <StyledCompanyLogoAppDetails logoUrl={application.logoUrl}></StyledCompanyLogoAppDetails>
        <StyledPositionAppDetails>{application.position}</StyledPositionAppDetails>
        <StyledCompanyNameAppDetails>{application.company}, {application.location}</StyledCompanyNameAppDetails>
        <StyledHorizontalLine></StyledHorizontalLine>
        <StyledUl>
            <li><StyledTag>Submitted At: </StyledTag><StyledTagContent>{getFormatedDate(application.submittedAt)}</StyledTagContent></li>
            <li><StyledTag>Status: </StyledTag><StyledTagContent>{application.status}</StyledTagContent></li>
            <li><StyledTag>Technologies: </StyledTag><StyledTagContent>{application.technologies?.map((tech, idx) => <ol key={tech + idx}>{tech}</ol>)}</StyledTagContent></li>
            <li><StyledTag>Experience: </StyledTag><StyledTagContent>{application.experience}</StyledTagContent></li>
            <li><StyledTag>SubmittedVia: </StyledTag><StyledTagContent>{application.submittedVia}</StyledTagContent></li>
        </StyledUl>
        <ButtonsWrapper>
            <StyledButton onClick={onUpdateApplication}>Update</StyledButton>
            <StyledRemoveButton onClick={onRemoveApplication}>Delete</StyledRemoveButton>
        </ButtonsWrapper>
    </StyledApplicationDetails>
}
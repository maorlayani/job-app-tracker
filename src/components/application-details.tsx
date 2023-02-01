import { application } from '../interfaces/trakcer'
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { toggleApplicationDetails } from '../store/reducers/tracker-slice'
import { RootState } from '../store/store'
import { StyledCompanyLogo } from './styles/company-logo.styled'
import { StyledPosition } from './styles/position.styled'
import { StyledCompanyName } from './styles/company-name.styled'
import { StyledHorizontalLine } from './styles/horizontal-line.styled'

interface ApplicationDetailsProps {
    application: application
}

interface StyledApplicationDetailsProps {
    isOpen: boolean
}

const StyledApplicationDetails = styled.div<StyledApplicationDetailsProps>`
    background-color: #fff;
    width: 270px;
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

export const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const isDetailsOpen = useAppSelector((state: RootState) => state.tracker.isDetailsOpen)

    const onCloseDetails = () => {
        dispatch(toggleApplicationDetails())
    }

    return <StyledApplicationDetails isOpen={isDetailsOpen} onClick={onCloseDetails}>
        <StyledCompanyLogoAppDetails logoUrl={application.logoUrl}></StyledCompanyLogoAppDetails>
        <StyledPositionAppDetails>{application.position}</StyledPositionAppDetails>
        <StyledCompanyNameAppDetails>{application.company}, {application.location}</StyledCompanyNameAppDetails>
        <StyledHorizontalLine></StyledHorizontalLine>
        <ul>
            {/* <li><StyledTag>Company: </StyledTag><StyledTagContent>{application.company}</StyledTagContent></li> */}
            {/* <li><StyledTag>Position: </StyledTag><StyledTagContent>{application.position}</StyledTagContent></li> */}
            <li><StyledTag>Submitted At: </StyledTag><StyledTagContent>{application.submittedAt}</StyledTagContent></li>
            <li><StyledTag>Status: </StyledTag><StyledTagContent>{application.status}</StyledTagContent></li>
            {/* <li><StyledTag>Location: </StyledTag><StyledTagContent>{application.location}</StyledTagContent></li> */}
            <li><StyledTag>Technologies: </StyledTag><StyledTagContent>{application.technologies?.map((tech, idx) => <ol key={tech + idx}>{tech}</ol>)}</StyledTagContent></li>
            <li><StyledTag>Experience: </StyledTag><StyledTagContent>{application.experience}</StyledTagContent></li>
            <li><StyledTag>SubmittedVia: </StyledTag><StyledTagContent>{application.submittedVia}</StyledTagContent></li>
        </ul>
    </StyledApplicationDetails>
}
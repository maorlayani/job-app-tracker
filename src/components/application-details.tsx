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
import { useNavigate } from 'react-router-dom'
import { ImgCloseIconContainer } from './styles/img-close-icon-container'
import closeIcon from '../assets/svg/close-icon.svg'
import { utilService } from '../services/util.service'
import { useState } from 'react'

interface ApplicationDetailsProps {
    application: application
}

interface StyledApplicationDetailsProps {
    isOpen: boolean
}

const StyledApplicationDetails = styled.div<StyledApplicationDetailsProps>`
    background-color: #fff;
    width: 600px;
    min-height: 500px;
    max-height: calc(100vh - 40px);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-family: 'league-spartan-medium';
    position: absolute;
    top: 20px;
    right: ${props => props.isOpen ? '0' : '-600px'};
    box-shadow: 0 0px 0px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    transition: right 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 .5em 1.5em .5em;
    box-sizing: border-box;
    `

const TagContainerCol = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`

const TagContainerRow = styled.div`
    display: inline-flex;
    padding: .5em;
    flex-wrap: wrap;
    gap: .2em;
`

const StyledTag = styled.span`
    font-size: 1em;
    color: #2c3a3a;
  `

const StyledTagContent = styled.span`
    color: #5ba4a4;
  `

const StyledApplicationContent = styled.div`
    align-self: flex-start;
    width: 100%;
    overflow-x: auto;
    margin: 1em 0;

    /* width */
    ::-webkit-scrollbar {
    width:8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 12px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888888d6;
    border-radius: 12px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555555cf;
    }
`

const StyledCompanyLogoAppDetails = styled(StyledCompanyLogo)`
    max-width: 75px;
    min-width: 75px;
    max-height: 75px;
    min-height: 75px;
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
    gap: 4em;
    margin-top: 1em;
    padding: 1em;
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
const StyledCloseIcon = styled(ImgCloseIconContainer)`
    img{
        width: 25px;
        height: 25px;
    }
`
export const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const isDetailsOpen = useAppSelector((state: RootState) => state.tracker.isDetailsOpen)
    const navigate = useNavigate()
    const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)
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

    return <StyledApplicationDetails isOpen={isDetailsOpen} >
        <StyledCloseIcon>
            <img src={closeIcon} alt="close icon" onClick={onCloseDetails} />
        </StyledCloseIcon>
        <StyledCompanyLogoAppDetails logoUrl={application.logoUrl}></StyledCompanyLogoAppDetails>
        <StyledPositionAppDetails>{application.position}</StyledPositionAppDetails>
        <StyledCompanyNameAppDetails>
            {application.company}, {application.location} |
            <StyledTagContent> Submitted {utilService.getTimeFromNow(application.submittedAt)}</StyledTagContent>
        </StyledCompanyNameAppDetails>
        <StyledHorizontalLine></StyledHorizontalLine>

        <StyledApplicationContent>
            <TagContainerCol>
                <StyledTag>Summary</StyledTag>
                <StyledHorizontalLine></StyledHorizontalLine>
                <TagContainerRow>
                    <TagContainerRow>
                        <StyledTag>Application status </StyledTag>
                        <StyledTagContent>{application.status}</StyledTagContent>
                    </TagContainerRow>
                    <TagContainerRow>
                        <StyledTag>Application submitted via </StyledTag><StyledTagContent>{application.submittedVia}</StyledTagContent>
                    </TagContainerRow>
                    <TagContainerRow><StyledTag>Technologies </StyledTag><StyledTagContent>{application.technologies?.map((tech, idx) => <ol key={tech + idx}>{tech}</ol>)}</StyledTagContent></TagContainerRow>
                    {application.experience !== undefined && <TagContainerRow>
                        <StyledTag>Experience required</StyledTag>
                        <StyledTagContent>{utilService.checkIsPlural(application.experience, 'year')}</StyledTagContent>
                    </TagContainerRow>}
                    <TagContainerRow>
                        <StyledTag>Contact </StyledTag>
                        <StyledTagContent>
                            <ul style={{ paddingInlineStart: '1em' }}>
                                <li>John Doe </li>
                                <li>Talent acquisition manager</li>
                                <li>Phone: 054-3454321</li>
                                <li>Email: johndoe@company.com</li>
                                <li><a href="https://www.linkedin.com/in/john-doe/" target='_blank'> Linkedin</a></li>
                            </ul>
                        </StyledTagContent>
                    </TagContainerRow>
                </TagContainerRow>
            </TagContainerCol>
            <TagContainerCol>
                <StyledTag onClick={() => setIsAdditionalOpen(true)}>Additional information{isAdditionalOpen ? '' : '...'}</StyledTag>
                <StyledHorizontalLine></StyledHorizontalLine>
                {isAdditionalOpen && <>
                    <TagContainerCol><StyledTag>Position description </StyledTag><StyledTagContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, neque architecto officia sed vel mollitia distinctio ab illo rerum aliquid incidunt nesciunt modi aliquam minima aut. Dolorum qui nostrum accusantium?</StyledTagContent></TagContainerCol>
                    <TagContainerCol><StyledTag>Company description </StyledTag>
                        <StyledTagContent>
                            {application.companyDesc ? application.companyDesc :
                                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nihil tempore velit dolor nemo ipsa a in saepe tenetur ex ullam nesciunt rem exercitationem aliquid maiores, iure, odio ea fugiat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, neque architecto officia sed vel mollitia distinctio ab illo rerum aliquid incidunt nesciunt modi aliquam minima aut. Dolorum qui nostrum accusantium?'}
                        </StyledTagContent>
                    </TagContainerCol>
                    <TagContainerCol><StyledTag>Personal Notes </StyledTag>
                        <StyledTagContent>
                            <ul style={{ paddingInlineStart: '1em' }}>
                                <li>Do that</li>
                                <li>Do this</li>
                                <li>Do that</li>
                                <li>Do this</li>
                            </ul>
                            <button>Add</button>
                            <button>Edit</button>
                        </StyledTagContent></TagContainerCol>
                </>}
                {isAdditionalOpen && <StyledTag onClick={() => setIsAdditionalOpen(false)}>Resize{!isAdditionalOpen ? '' : '...'}</StyledTag>}
            </TagContainerCol>
        </StyledApplicationContent>

        {isAdditionalOpen && <StyledHorizontalLine></StyledHorizontalLine>}
        <ButtonsWrapper>
            <StyledButton onClick={onUpdateApplication}>Edit</StyledButton>
            <StyledRemoveButton onClick={onRemoveApplication}>Delete</StyledRemoveButton>
        </ButtonsWrapper>
    </StyledApplicationDetails >
}
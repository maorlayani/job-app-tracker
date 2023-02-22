import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { removeApplication, toggleApplicationDetails } from '../../store/reducers/tracker-slice'
import { RootState } from '../../store/store'
import { StyledHorizontalLine } from '../styles/horizontal-line.styled'
import { StyledButton } from '../styles/button.styled'
import { useNavigate } from 'react-router-dom'
import closeIcon from '../../assets/svg/close-icon.svg'
import { utilService } from '../../services/util.service'
import { useState } from 'react'
import { ApplicationDetailsProps } from './interfaces-application-details'
import { ButtonsWrapper, StyledApplicationContent, StyledApplicationDetails, StyledCloseIcon, StyledCompanyLogoAppDetails, StyledCompanyNameAppDetails, StyledPositionAppDetails, StyledRemoveButton, StyledTag, StyledTagContent, TagContainerCol, TagContainerRow } from './styled-application-details'

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
        {/* <StyledCloseIcon>
            <img src={closeIcon} alt="close icon" onClick={onCloseDetails} />
        </StyledCloseIcon> */}
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
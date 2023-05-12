import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { removeApplication, setCurrentApplicationDetails, toggleApplicationDetails } from '../../store/reducers/tracker-slice'
import { RootState } from '../../store/store'
import { StyledHorizontalLine } from '../styles/horizontal-line.styled'
import { StyledButton } from '../styles/buttons.styled'
import { useNavigate } from 'react-router-dom'
import { utilService } from '../../services/util.service'
import { useEffect, useState } from 'react'
import { ButtonsWrapper, StyledApplicationContent, StyledApplicationDetails, StyledDetailsIcon, StyledRemoveButton, StyledTag, StyledTagContent, TagContainerCol, TagContainerRow, TagTitle, DetailsTechTagContent } from './styled-application-details'
import { DetailsHeader } from './details-header/details-header'
import statusIcon from '../../assets/img/status.png'
import submittedIcon from '../../assets/img/submitted-via.png'
import technologiesIcon from '../../assets/img/technologies.png'
import experienceIcon from '../../assets/img/experience.png'
import contacteIcon from '../../assets/img/contact.png'
import { ProgressBar } from '../progress-bar/progress-bar'
import { TechLogo, TechName, TechTagContainer, TechTagContent } from '../add-application/styled-add-application'

export const ApplicationDetails = () => {
    const dispatch = useAppDispatch()
    const isDetailsOpen = useAppSelector((state: RootState) => state.tracker.isDetailsOpen)
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const applicationDetails = useAppSelector((state: RootState) => state.tracker.applicationDetails)

    const navigate = useNavigate()
    const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)

    useEffect(() => {
        if (!applicationDetails.company) {
            dispatch(setCurrentApplicationDetails(applications[0]))
        }
    }, [])

    const onCloseDetails = () => {
        dispatch(toggleApplicationDetails())
    }

    const onRemoveApplication = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        dispatch(removeApplication(applicationDetails._id))
        dispatch(toggleApplicationDetails())
    }

    const onUpdateApplication = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        navigate(`/edit/${applicationDetails._id}`)
        onCloseDetails()
    }

    return <StyledApplicationDetails>
        {/* <DetailsHeader application={applicationDetails} isFullDetails={false} /> */}
        <StyledApplicationContent>
            <TagContainerCol>
                {/* <StyledTag>Summary</StyledTag>
                <StyledHorizontalLine></StyledHorizontalLine> */}
                <TagContainerCol>
                    <TagContainerRow>

                        <TagContainerCol>
                            <TagTitle>Application status</TagTitle>
                            <StyledTag>
                                <StyledDetailsIcon>
                                    <img src={statusIcon} title='Application Status' />
                                </StyledDetailsIcon>
                                <StyledTagContent>{applicationDetails.status}</StyledTagContent>
                            </StyledTag>
                        </TagContainerCol>
                        <TagContainerCol>
                            <TagTitle>Applied Via</TagTitle>
                            <StyledTag>
                                <StyledDetailsIcon>
                                    <img src={submittedIcon} title='Applied Via' />
                                </StyledDetailsIcon>
                                <StyledTagContent>{applicationDetails.submittedVia}</StyledTagContent>
                            </StyledTag>
                        </TagContainerCol>
                        {applicationDetails.experience !== undefined && <TagContainerCol>
                            <TagTitle>Experience required</TagTitle>
                            <StyledTag>
                                <StyledDetailsIcon>
                                    <img src={experienceIcon} title='Experience required' />
                                </StyledDetailsIcon>
                                <StyledTagContent>{utilService.checkIsPlural(applicationDetails.experience, 'year')}</StyledTagContent>
                            </StyledTag>
                        </TagContainerCol>}
                        {applicationDetails.contact && <TagContainerCol>
                            <TagTitle>Contact</TagTitle>
                            <StyledTag>
                                <StyledDetailsIcon>
                                    <img src={contacteIcon} title='Contact' />
                                </StyledDetailsIcon>
                                <span>{applicationDetails.contact.name}</span>
                            </StyledTag>
                            <StyledTagContent>
                                <ul style={{ paddingInlineStart: '1em' }}>
                                    {/* <li>Name: {applicationDetails.contact.name} </li> */}
                                    {/* <li>Talent acquisition manager</li> */}
                                    <li>Email: {applicationDetails.contact.email}</li>
                                    <li>Phone: {applicationDetails.contact.phone}</li>
                                    {/* <li>{applicationDetails.contact.linkedin}</li> */}
                                    <li><a href={applicationDetails.contact.linkedin} target='_blank'> Linkedin</a></li>
                                </ul>
                            </StyledTagContent>
                        </TagContainerCol>}
                    </TagContainerRow>
                    {applicationDetails.technologies && <TagContainerCol>
                        <TagTitle>Technologies</TagTitle>
                        <StyledTag>
                            <StyledTagContent>
                                <TechTagContainer>
                                    {applicationDetails.technologies.map(tech => <DetailsTechTagContent key={tech._id}>
                                        <TechLogo src={tech.logoUrl} />
                                        <TechName >{tech.name}</TechName>
                                    </DetailsTechTagContent>)}
                                </TechTagContainer>
                            </StyledTagContent>
                        </StyledTag>
                    </TagContainerCol>}


                    <ProgressBar application={applicationDetails} />
                </TagContainerCol>
            </TagContainerCol>
            {/* <TagContainerCol>
                <StyledTag onClick={() => setIsAdditionalOpen(true)}>Show additional information{isAdditionalOpen ? '' : '...'}</StyledTag>
                <StyledHorizontalLine></StyledHorizontalLine>
                {isAdditionalOpen && <>
                    <TagContainerCol><StyledTag>Position description </StyledTag><StyledTagContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, neque architecto officia sed vel mollitia distinctio ab illo rerum aliquid incidunt nesciunt modi aliquam minima aut. Dolorum qui nostrum accusantium?</StyledTagContent></TagContainerCol>
                    <TagContainerCol><StyledTag>Company description </StyledTag>
                        <StyledTagContent>
                            {applicationDetails.companyDesc ? applicationDetails.companyDesc :
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
                {isAdditionalOpen && <StyledTag onClick={() => setIsAdditionalOpen(false)}>Hide{!isAdditionalOpen ? '' : '...'}</StyledTag>}
            </TagContainerCol> */}
        </StyledApplicationContent>

        {isAdditionalOpen && <StyledHorizontalLine></StyledHorizontalLine>}
        <ButtonsWrapper>
            {/* <StyledButton onClick={onUpdateApplication}>Edit</StyledButton> */}
            <StyledButton onClick={() => navigate(`/tracker/${applicationDetails._id}`)}>More Details</StyledButton>
            <StyledRemoveButton onClick={onRemoveApplication}>Delete</StyledRemoveButton>
        </ButtonsWrapper>
    </StyledApplicationDetails >
}
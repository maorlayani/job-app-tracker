import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { removeApplication, setCurrentApplicationDetails, toggleApplicationDetails } from '../../store/reducers/tracker-slice'
import { RootState } from '../../store/store'
import { StyledHorizontalLine } from '../styles/horizontal-line.styled'
import { StyledButton } from '../styles/button.styled'
import { useNavigate } from 'react-router-dom'
import closeIcon from '../../assets/svg/close-icon.svg'
import { utilService } from '../../services/util.service'
import { useEffect, useState } from 'react'
import { ButtonsWrapper, StyledApplicationContent, StyledApplicationDetails, StyledCloseIcon, StyledCompanyLogoAppDetails, StyledCompanyNameAppDetails, StyledPositionAppDetails, StyledRemoveButton, StyledTag, StyledTagContent, TagContainerCol, TagContainerRow } from './styled-application-details'

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

    return <StyledApplicationDetails isOpen={isDetailsOpen} >
        {/* <StyledCloseIcon>
            <img src={closeIcon} alt="close icon" onClick={onCloseDetails} />
        </StyledCloseIcon> */}
        <StyledCompanyLogoAppDetails logoUrl={applicationDetails.logoUrl}></StyledCompanyLogoAppDetails>
        <StyledPositionAppDetails>{applicationDetails.position}</StyledPositionAppDetails>
        <StyledCompanyNameAppDetails>
            {applicationDetails.company}, {applicationDetails.location} |
            <StyledTagContent> Submitted {utilService.getTimeFromNow(applicationDetails.submittedAt)}</StyledTagContent>
        </StyledCompanyNameAppDetails>
        <StyledHorizontalLine></StyledHorizontalLine>

        <StyledApplicationContent>
            <TagContainerCol>
                <StyledTag>Summary</StyledTag>
                <StyledHorizontalLine></StyledHorizontalLine>
                <TagContainerRow>
                    <TagContainerRow>
                        <StyledTag>Application status </StyledTag>
                        <StyledTagContent>{applicationDetails.status}</StyledTagContent>
                    </TagContainerRow>
                    <TagContainerRow>
                        <StyledTag>Application submitted via </StyledTag><StyledTagContent>{applicationDetails.submittedVia}</StyledTagContent>
                    </TagContainerRow>
                    <TagContainerRow><StyledTag>Technologies </StyledTag><StyledTagContent>{applicationDetails.technologies?.map((tech, idx) => <ol key={tech + idx}>{tech}</ol>)}</StyledTagContent></TagContainerRow>
                    {applicationDetails.experience !== undefined && <TagContainerRow>
                        <StyledTag>Experience required</StyledTag>
                        <StyledTagContent>{utilService.checkIsPlural(applicationDetails.experience, 'year')}</StyledTagContent>
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
            </TagContainerCol>
        </StyledApplicationContent>

        {isAdditionalOpen && <StyledHorizontalLine></StyledHorizontalLine>}
        <ButtonsWrapper>
            <StyledButton onClick={onUpdateApplication}>Edit</StyledButton>
            <StyledRemoveButton onClick={onRemoveApplication}>Delete</StyledRemoveButton>
        </ButtonsWrapper>
    </StyledApplicationDetails >
}
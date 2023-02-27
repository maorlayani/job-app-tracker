import { Application } from '../../models/interfaces'
import Globalfonts from '../../assets/global-fonts'
import React from 'react'
import { toggleApplicationDetails, setCurrentApplicationDetails, updateApplication } from '../../store/reducers/tracker-slice'
import { HiLocationMarker } from 'react-icons/hi'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { BsThreeDotsVertical, BsFillBookmarkDashFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'
import { StyledCompanyLogo } from '../styles/company-logo.styled'
import { StyledPosition } from '../styles/position.styled'
import { StyledCompanyName } from '../styles/company-name.styled'
import { utilService } from '../../services/util.service'
import { ApplicationPreviewProps } from './interfaces-application-preview'
import { PreviewContainer, PreviewContentContainer, PreviewIconsWrapper, PreviewLI, RowContainer, StyledActionIcon, StyledIcon, StyledTag } from './styled-application-preview'

export const ApplicationPreview: React.FC<ApplicationPreviewProps> = ({ application }) => {

    const dispatch = useAppDispatch()
    const isDetailsOpen = useAppSelector((state: RootState) => state.tracker.isDetailsOpen)

    const onSetAppliction: (application: Application) => void = (application) => {
        dispatch(setCurrentApplicationDetails(application))
        if (!isDetailsOpen) dispatch(toggleApplicationDetails())
    }

    const togglePinApplication = (ev: React.MouseEvent<HTMLDivElement>) => {
        ev.stopPropagation()
        const applicationToUpdate: Application = { ...application }
        applicationToUpdate.isPinned = !application.isPinned
        dispatch(updateApplication(applicationToUpdate))
    }

    return <React.Fragment>
        <PreviewLI key={application._id} onClick={() => onSetAppliction(application)}>
            <PreviewIconsWrapper>
                <StyledIcon isMarked={application.isPinned} onClick={togglePinApplication} title="Pinned">
                    <BsFillBookmarkDashFill />
                </StyledIcon>
                <StyledActionIcon>
                    <BsThreeDotsVertical />
                </StyledActionIcon>
            </PreviewIconsWrapper>
            <PreviewContainer>
                <Globalfonts />
                <StyledCompanyLogo logoUrl={application.logoUrl}></StyledCompanyLogo>
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
            </PreviewContainer>
        </PreviewLI >
    </ React.Fragment >
}
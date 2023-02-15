import { application } from '../interfaces/trakcer'
import styled from 'styled-components'
import Globalfonts from '../assets/global-fonts'
import React, { useState } from 'react'
import { toggleApplicationDetails, setCurrentApplicationDetails } from '../store/reducers/tracker-slice'
import { HiLocationMarker } from 'react-icons/hi'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import { BsThreeDotsVertical, BsFillBookmarkDashFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { RootState } from '../store/store'
import { StyledCompanyLogo } from './styles/company-logo.styled'
import { StyledPosition } from './styles/position.styled'
import { StyledCompanyName } from './styles/company-name.styled'
import { utilService } from '../services/util.service'

interface ApplicationPreviewProps {
    application: application
}

interface StyledIconProps {
    isMarked: boolean
}

const PreviewLI = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 600px;
    height: 120px;
    margin-block-end: 10px;
    border-radius: 12px;
    font-family: 'league-spartan-medium';
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 1px #ae84d1, 0 1px 3px 1px #ae84d1;
    }
`

const PreviewContainer = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
    padding: 0 2em 2em 2em;
    `
const PreviewContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;
`
const RowContainer = styled.div`
    display: flex;
    gap: 10px;
    color: #463553d3;
`

const StyledTag = styled.span`
    min-width: fit-content;
    font-size: 0.9em;
`
const PreviewIconsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1em 1em 0 1em;
    font-size: 0.8em;
    gap: 1em;
`

const StyledIcon = styled.div<StyledIconProps>`
    background-color:#fff;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.isMarked ? '#ae84d1' : '#b6b3b3'};
    font-size: 1.4em;
`

const StyledActionIcon = styled.div`
    background-color:#b6b3b3 ;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
    font-size: 0.8em;
`

export const ApplicationPreview: React.FC<ApplicationPreviewProps> = ({ application }) => {

    const dispatch = useAppDispatch()
    const isDetailsOpen = useAppSelector((state: RootState) => state.tracker.isDetailsOpen)
    const [isMarked, setIsMarked] = useState(false)

    const onSetAppliction: (application: application) => void = (application) => {
        dispatch(setCurrentApplicationDetails(application))
        if (!isDetailsOpen) dispatch(toggleApplicationDetails())
    }

    const togglePinApplication = (ev: React.MouseEvent<HTMLDivElement>) => {
        ev.stopPropagation()
        setIsMarked(!isMarked)
    }

    return <React.Fragment>
        <PreviewLI key={application.id} onClick={() => onSetAppliction(application)}>
            <PreviewIconsWrapper>
                <StyledIcon isMarked={isMarked} onClick={togglePinApplication}>
                    <BsFillBookmarkDashFill />
                </StyledIcon>
                <StyledActionIcon>
                    <BsThreeDotsVertical />
                </StyledActionIcon>
            </PreviewIconsWrapper>
            <PreviewContainer >
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
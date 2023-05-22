import { AiFillInfoCircle } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"
import { HiLocationMarker } from "react-icons/hi"
import styled from "styled-components"
import { Application } from "../../models/interfaces"
import { utilService } from "../../services/util.service"
import { FrontCardProps } from "./interfaces-front-card"

const StyeldFrontCardContent = styled.div`
    display: flex;
    gap: 10px;
    color: #463553d3;
    flex-direction: column;
`
const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`
const StyledTag = styled.span`
    width: 100px;
    font-size: 0.9em;
    margin-block-start: 2px;
    max-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const FrontCardContent: React.FC<FrontCardProps> = ({ application }) => {

    const getExperience = (application: Application) => {
        if (application.experience !== undefined)
            return `${utilService.checkIsPlural(application.experience, 'year')} experience`
        return ''
    }

    return (
        <StyeldFrontCardContent>
            <TagContainer>
                <HiLocationMarker />
                <StyledTag>{application.location}</StyledTag>
            </TagContainer>
            <TagContainer>
                <BiCodeAlt />
                <StyledTag>{getExperience(application)}</StyledTag>
            </TagContainer>
            <TagContainer>
                <AiFillInfoCircle />
                <StyledTag>{application.status}</StyledTag>
            </TagContainer>
        </StyeldFrontCardContent>
    )
}
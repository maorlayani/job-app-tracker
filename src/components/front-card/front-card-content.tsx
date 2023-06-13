import { AiFillInfoCircle } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"
import { HiLocationMarker } from "react-icons/hi"
import styled from "styled-components"
import { Application } from "../../models/interfaces"
import { utilService } from "../../services/util.service"
import { FrontCardProps } from "./interfaces-front-card"
import { CardTagContnet } from "../card/card-tag-content"

const StyeldFrontCardContent = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`
export const FrontCardContent: React.FC<FrontCardProps> = ({ application }) => {

    const getExperience = (application: Application) => {
        if (application.experience !== undefined)
            return `${utilService.checkIsPlural(application.experience, 'year')} experience`
        return ''
    }

    return (
        <StyeldFrontCardContent>
            <CardTagContnet content={application.location} IconCmp={<HiLocationMarker />} />
            <CardTagContnet content={getExperience(application)} IconCmp={<BiCodeAlt />} />
            <CardTagContnet content={application.status} IconCmp={<AiFillInfoCircle />} />
        </StyeldFrontCardContent>
    )
}
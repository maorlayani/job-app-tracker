import { BiMailSend, BiTimeFive } from "react-icons/bi"
import styled from "styled-components"
import { CardTagContnet } from "../card/card-tag-content"
import { BackCardProps } from "./back-card"
import { utilService } from "../../services/util.service"

const StyeldBackCardContent = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block-start: 4rem;
    
`
const TitleTag = styled.span`
    color: var(--primary-text);
    font-size: 1rem;
    padding: 1rem;
    border-block-end: 1px solid var(--secondary-text);
`
export const BackCardContent: React.FC<BackCardProps> = ({ application }) => {

    console.log(application);
    return (
        <StyeldBackCardContent>
            <TitleTag>Additional information</TitleTag>
            <CardTagContnet content={application.postedDate ? `Posted ${utilService.dateToString(application.postedDate)}` : ''} IconCmp={<BiTimeFive />} />
            <CardTagContnet content={application.submittedAt ? `Applied ${utilService.dateToString(application.submittedAt)}` : ''} IconCmp={<BiMailSend />} />
        </StyeldBackCardContent>
    )
}
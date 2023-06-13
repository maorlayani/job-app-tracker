import { ReactElement } from 'react'
import styled from 'styled-components'

const StyledCardTagContnet = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`
const StyledTag = styled.span`
    width: 120px;
    font-size: 0.9em;
    margin-block-start: 2px;
    max-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`
interface CardTagContnetProps {
    content: string | number,
    IconCmp: ReactElement
}
export const CardTagContnet: React.FC<CardTagContnetProps> = ({ content, IconCmp }) => {
    return (
        <StyledCardTagContnet>
            {IconCmp}
            <StyledTag>{content ? content : 'Add information'}</StyledTag>
        </StyledCardTagContnet>
    )
}
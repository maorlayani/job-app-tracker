import styled from 'styled-components'
import { StyledDetailsTag, TagContent, TagTitle } from './details-tag'
import { RiFileDownloadLine } from 'react-icons/ri'
import { appwriteUploadService } from '../../services/appwrite.upload'
import { useState } from 'react'
const StyledResumeTag = styled(StyledDetailsTag)`
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`
const IconContainer = styled.a`
    color: var(--filter-text);
    &:hover {
        cursor: pointer;
    }
    svg {
        width: 20px;
        height: 20px;
    }
`
interface ResumeTagProps {
    file: { id: string, name: string }
}
export const ResumeTag: React.FC<ResumeTagProps> = ({ file }) => {
    const [herf, setHerf] = useState('')
    const onDownloadFile = async () => {
        const res = await appwriteUploadService.downloadFile(file.id)
        if (res) setHerf(res)
    }
    return (
        <StyledResumeTag>
            <TitleContainer>
                <TagTitle>Resume</TagTitle>
                <IconContainer href={herf} onClick={onDownloadFile}><RiFileDownloadLine /></IconContainer>
            </TitleContainer>
            <TagContent>
                {file.name}
            </TagContent>
        </StyledResumeTag>
    )
}
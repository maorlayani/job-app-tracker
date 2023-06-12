import styled from 'styled-components'
import { ApplicationKeys } from '../../models/enums'
import { Application } from '../../models/interfaces'
import { TechTagPreview } from '../tech-tag/tech-tag-preview'
import { DetailsTag, TagTitle } from './details-tag'

const StyledBottomContent = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 90%;
    margin-block-end: 2em;
`

const TechnologiesContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    gap: 20px;  
    width: 100%;
    overflow-y: auto;
    max-height: 300px;
    margin-block-start: .5em;
    margin-block-end: 1em;
`

const DetailsDescTag = styled(DetailsTag)`
    span:last-child {
        line-height: 2;
    }
`
interface BottomContentProps {
    application: Application
}
export const BottomContent: React.FC<BottomContentProps> = ({ application }) => {
    return (
        <StyledBottomContent>
            {!!application.technologies?.length && <>
                <TagTitle>Technologies</TagTitle>
                <TechnologiesContainer>
                    {application.technologies.map(tech =>
                        <TechTagPreview
                            key={tech._id}
                            tech={tech}
                            istoggleDisable={true}
                            setApplicationTechnologies={() => { }} />)}
                </TechnologiesContainer>
            </>}
            <DetailsDescTag title='Company Description'
                application={application}
                content={application.companyDesc || ''}
                name={ApplicationKeys.companyDesc}
                isTextArea={true} />
            <DetailsDescTag title='Position Description'
                application={application}
                content={application.positionDesc || ''}
                name={ApplicationKeys.positionDesc}
                isTextArea={true} />
        </StyledBottomContent>
    )
}
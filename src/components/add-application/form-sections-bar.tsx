import styled from "styled-components"
import { trackerService } from "../../services/tracker.service"
import { FormSection } from "./form-section"

const StyledFormProgressBar = styled.div`
    display: flex;
    gap: 1.5em;
    width: 80%;
    height: 30px;
    border-radius: 9px;
    // margin-block-start: 120px;
    &:hover {
        cursor: pointer;
    }
`
interface FormSectionsBarProps {
    setSection: (setNewPage: number, isAbsolutePage?: boolean) => void,
    selectedSection: FormSectionTxt
}

export enum FormSectionTxt {
    firstSection = 'Basic info',
    secondSection = 'Skills',
    thirdSection = 'Dates',
    fourthSection = 'More info',
}

export const FormSectionsBar: React.FC<FormSectionsBarProps> = ({ setSection, selectedSection }) => {

    return (
        <StyledFormProgressBar>
            {trackerService.getFormBarSections().map(section => {
                return <FormSection
                    key={section.type}
                    idx={section.idx}
                    isSelected={selectedSection === section.type}
                    beforeContent={section.type}
                    setSection={setSection} />
            })}
        </StyledFormProgressBar>
    )
}
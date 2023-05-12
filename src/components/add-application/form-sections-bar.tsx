import styled from "styled-components"
import { trackerService } from "../../services/tracker.service"
import { FormSection } from "./form-section"

const StyledFormProgressBar = styled.div`
    display: flex;
    width: 80%;
    height: 30px;
    border-radius: 9px;
    margin-block-start: 20px;
    &:hover {
        cursor: pointer;
    }
`
interface FormSectionsBarProps {
    setSelectedSection: (selectedSection: FormSectionTxt) => void,
    selectedSection: FormSectionTxt
}

export enum FormSectionTxt {
    firstSection = 'Basic info',
    secondSection = 'Skills',
    thirdSection = 'Dates',
    fourthSection = 'Additional info',
}

export const FormSectionsBar: React.FC<FormSectionsBarProps> = ({ setSelectedSection, selectedSection }) => {
    const sectionClickHandler = (section: FormSectionTxt) => {
        setSelectedSection(section)
    }

    return (
        <StyledFormProgressBar>
            {trackerService.getFormBarSections().map(section => {
                return <FormSection
                    key={section.type}
                    idx={section.idx}
                    isSelected={selectedSection === section.type}
                    beforeContent={section.type}
                    sectionClickHandler={sectionClickHandler} />
            })}
        </StyledFormProgressBar>
    )
}
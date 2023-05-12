import styled from "styled-components"
import { FormTextInput } from "../inputs/form-text-input"
import { ElementType, Status } from "../../models/enums"
import { Register } from "../../models/interfaces"
import { FormRangeInput } from "../inputs/form-range-input"
import { trackerService } from "../../services/tracker.service"
import { FormSelect } from "../inputs/form-select"

const StyledFirstSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-block-end: 15px;
    flex-wrap: wrap;
`

export interface FirstSectionProps {
    register: Register,
    exp: string
}

export const FirstSection: React.FC<FirstSectionProps> = ({ register, exp }) => {

    return (
        <StyledFirstSection>
            {trackerService.getFirstSectionInputsData().map(input => {
                if (input.type !== ElementType.rangeInput) {
                    return <FormTextInput
                        key={input.name}
                        type={input.type}
                        labelTxt={input.labelTxt}
                        name={input.name}
                        placeholder={input.placeholder}
                        register={register}
                        isRequired={input.isRequired} />
                }
                else if (input.type === ElementType.rangeInput) {
                    return <FormRangeInput
                        key={input.name}
                        exp={exp}
                        labelTxt={input.labelTxt}
                        name={input.name}
                        placeholder={input.placeholder}
                        register={register}
                        isRequired={input.isRequired} />
                }
            })
            }
            <FormSelect register={register} />
        </StyledFirstSection>
    )
}
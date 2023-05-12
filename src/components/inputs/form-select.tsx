import styled from "styled-components"
import { Status } from "../../models/enums"
import { Register } from "../../models/interfaces"
import { Input } from "../styles/input.styled"
import { FormLabel } from "./form-label"

const StyledFormSelect = styled.div`
    width: 100%;
    @media (min-width: 1050px) {
        width: 48%;
    }
    @media (min-width: 1270px) {
        width:31%;
    }
`

const StyledSelect = styled(Input)`
    margin-block-start: 8px;
`

export interface FormSelectProps {
    register: Register
}
export const FormSelect: React.FC<FormSelectProps> = ({ register }) => {
    return (
        <StyledFormSelect>
            <FormLabel htmlFor="status" labelTxt="Status" />
            <StyledSelect as="select" {...register('status', 'select')} required>
                <option value="" hidden>Select Status</option>
                <option value={Status.submitted}>Submitted</option>
                <option value={Status['home assignment']}>Home Assignment</option>
                <option value={Status['scheduled interview']}>Scheduled Interview</option>
                <option value={Status.contract}>Contract</option>
                <option value={Status.rejection}>Rejection</option>
            </StyledSelect>
        </StyledFormSelect>
    )
}
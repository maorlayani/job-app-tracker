import { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import { ApplicationDates } from "../add-application/add-application"
import { FormRadioInput } from "../inputs/from-radio-input"
import { CustomCalendar } from "./custom-calendar"
import { DateDisplay } from "./date-display"

const StyledCustomDateInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;
`
const RadioInputContainer = styled.div`
    display: flex;
    margin-block-end: 20px;
    flex-direction: column;
    @media (min-width: 800px) {
      flex-direction: row;
    }
`

interface CustomDateInputProps {
    selectedDate: string
    setDates: Dispatch<SetStateAction<ApplicationDates>>
}
export const CustomDateInput: React.FC<CustomDateInputProps> = ({ selectedDate, setDates }) => {
    const [selectedInputValue, setSelectedInputValue] = useState('')

    return (
        <StyledCustomDateInput>
            <RadioInputContainer>
                <FormRadioInput
                    name="custom-date-input"
                    id="postedDate"
                    labelTxt="Position Posted Date"
                    setSelectedInputValue={setSelectedInputValue} />
                <DateDisplay
                    selectedDate={selectedDate}
                    selectedInputValue={selectedInputValue}
                    setDates={setDates}
                    valueType="postedDate" />
            </RadioInputContainer>
            <RadioInputContainer>
                <FormRadioInput
                    name="custom-date-input"
                    id="submittedAt"
                    labelTxt="Applied Date"
                    setSelectedInputValue={setSelectedInputValue} />
                <DateDisplay
                    selectedDate={selectedDate}
                    selectedInputValue={selectedInputValue}
                    setDates={setDates}
                    valueType="submittedAt" />
            </RadioInputContainer>
        </StyledCustomDateInput>
    )
}
import { useState, Dispatch, SetStateAction } from "react"
import styled from "styled-components"
import { CustomCalendar } from "../custom-date-input/custom-calendar"
import { CustomDateInput } from "../custom-date-input/custom-date-input"
import { ApplicationDates } from "./add-application"

const StyledThirdSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
interface ThirdSectionProps {
    dates: ApplicationDates,
    setDates: Dispatch<SetStateAction<ApplicationDates>>
}
export const ThirdSection: React.FC<ThirdSectionProps> = ({ dates, setDates }) => {
    const [selectedDate, setSelectedDate] = useState('')

    return (
        <StyledThirdSection>
            <CustomDateInput selectedDate={selectedDate} setDates={setDates} />
            <CustomCalendar setSelectedDate={setSelectedDate} />
        </StyledThirdSection>
    )
}
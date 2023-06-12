import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styled from "styled-components"
import { ApplicationDates } from "../add-application/add-application"

const StyledDateDisplay = styled.div`
    display: flex;
    align-items: center;
    width: 160px;
    justify-content: center;
`
interface DateContainerProps {
    isFocused: boolean
}
const DateContainer = styled.div<DateContainerProps>`
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    background-color: var(--white-background);
    border-radius: 6px;
    margin-inline-start: 10px;
    justify-content: center;
    box-shadow: 0 0 3px 1px ${props => !props.isFocused ? 'var(--secondary-text)' : 'var(--primary-button)'};
`
const DateLabel = styled.span`
`

interface DateDisplayProps {
    selectedDate: any,
    selectedInputValue: string,
    valueType: string
    setDates: Dispatch<SetStateAction<ApplicationDates>>

}

export const DateDisplay: React.FC<DateDisplayProps> = ({ selectedDate, selectedInputValue, valueType, setDates }) => {

    const [date, setDate] = useState<any>('DD/MM/YYY')

    useEffect(() => {
        setCurrDate()
    }, [selectedDate])
    const setCurrDate = () => {
        if (!selectedDate) return
        if (selectedInputValue === valueType) {
            setDates((prevDates: ApplicationDates) => ({ ...prevDates, [valueType]: selectedDate }))
            setDate(selectedDate.toLocaleDateString('en-GB'))
        }
    }

    return (
        <StyledDateDisplay>
            <DateContainer isFocused={selectedInputValue === valueType}>
                <DateLabel>{date}</DateLabel>
            </DateContainer>
        </StyledDateDisplay>
    )
}
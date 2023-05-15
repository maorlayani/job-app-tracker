import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styled from "styled-components"
import { ApplicationDates } from "../add-application/add-application"
import { StyledLabelTitle } from "../styles/input.styled"

const StyledDateDisplay = styled.div`
    display: flex;
    // flex-direction:
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
    // padding-inline-start: 10px;
    background-color: #fff;
    border-radius: 6px;
    margin-inline-start: 10px;
    justify-content: center;
    box-shadow: 1px 1px 3px 1px #cfcfcf;
    border: ${props => props.is}
`
const DateLabel = styled.span`
// width: 100%;
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
        if (selectedInputValue === valueType) {
            setDates((prevDates: ApplicationDates) => ({ ...prevDates, [valueType]: selectedDate }))
            setDate(selectedDate.toLocaleDateString('en-GB'))
        }
    }

    return (
        <StyledDateDisplay>
            {/* <StyledLabelTitle as="span">Date</StyledLabelTitle> */}
            <DateContainer isFocused={selectedInputValue === valueType}>
                <DateLabel>{date}</DateLabel>
            </DateContainer>
        </StyledDateDisplay>
    )
}
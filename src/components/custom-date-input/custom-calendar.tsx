import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import styled from 'styled-components';

const CalendarContainer = styled.div`

`

interface CustomCalendarProps {
    setSelectedDate: (selectedDate: string) => void
}

export const CustomCalendar: React.FC<CustomCalendarProps> = ({ setSelectedDate }) => {
    const [date, setDate] = useState<Date>(new Date())

    const handleSelect = (selectedDate: any) => {
        setSelectedDate(selectedDate)
        setDate(selectedDate);
    }
    return (
        <CalendarContainer>
            <Calendar
                date={date}
                onChange={handleSelect}
                color='#b9ad98' />
        </CalendarContainer>
    )
} 

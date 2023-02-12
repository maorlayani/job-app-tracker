import { useState } from "react"
import styled from "styled-components"
import img from '../assets/svg/selected-background.svg'

const StyledCheckbox = styled.div<StyledFilterCheckboxProps>`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: #fafbfc;
    box-shadow: ${props => props.isChecked ? ' inset 0 0 0 2px #ae84d1' :
        'inset 0 0 0 2px #dfe1e6'};
    transition: all .1s ease-in-out;
    background-image: url(${props => props.isChecked ? img : ''});
    background-color: ${props => props.isChecked ? '#ae84d1' : ''};
    &:hover{
        cursor: pointer;
        background-color: #ebecf0;
            box-shadow: inset 0 0 0 2px #dfe1e6;
    }

`
interface StyledFilterCheckboxProps {
    isChecked: boolean
}

interface FilterCheckboxProps {
    label: string
}
export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false)

    const toggleCheckbox = () => setIsChecked(!isChecked)
    return <>
        <StyledCheckbox isChecked={isChecked} onClick={toggleCheckbox}></StyledCheckbox>
        <span onClick={toggleCheckbox}>{label}</span>
    </>
}
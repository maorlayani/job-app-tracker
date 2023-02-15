import { useEffect, useState } from "react"
import styled from "styled-components"
import img from '../assets/svg/selected-background.svg'
import { useAppSelector } from "../hooks/redux-hooks"
import { RootState } from "../store/store"

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
const StyledCheckboxLabel = styled.span`
    cursor: default;
`
interface StyledFilterCheckboxProps {
    isChecked: boolean
}

interface FilterCheckboxProps {
    label: string,
    type: string,
    checkboxHandler: (type: string, label: string) => void
}
export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label, type, checkboxHandler }) => {
    const [isChecked, setIsChecked] = useState(false)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)
    useEffect(() => {
        if (type === 'location' || type === 'position' || type === 'status') {
            if (filterBy[type].includes(label) && !isChecked) {
                setIsChecked(!isChecked)
            }
        }
    }, [])

    const toggleCheckbox = () => {
        setIsChecked(!isChecked)
        checkboxHandler(type, label)
    }

    return <>
        <StyledCheckbox isChecked={isChecked} onClick={toggleCheckbox}></StyledCheckbox>
        <StyledCheckboxLabel onClick={toggleCheckbox}>{label}</StyledCheckboxLabel>
    </>
}
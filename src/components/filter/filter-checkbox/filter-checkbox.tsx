import { useEffect, useState } from "react"
import { useAppSelector } from "../../../hooks/redux-hooks"
import { RootState } from "../../../store/store"
import { FilterCheckboxProps } from "./interfaces-filter-checkbox"
import { StyledCheckbox, StyledCheckboxLabel } from "./styled-filter-checkbox"

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
        if (type) checkboxHandler(type, label)
    }

    return <>
        <StyledCheckbox isChecked={isChecked} onClick={toggleCheckbox}></StyledCheckbox>
        <StyledCheckboxLabel onClick={toggleCheckbox}>{label}</StyledCheckboxLabel>
    </>
}
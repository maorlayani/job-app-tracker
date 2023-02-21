export interface StyledFilterCheckboxProps {
    isChecked: boolean
}

export interface FilterCheckboxProps {
    label: string,
    type: string,
    checkboxHandler: (type: string, label: string) => void
}
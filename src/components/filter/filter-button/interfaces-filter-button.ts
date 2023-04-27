export interface StyledFilterButtonProps {
    isFilterChecked: boolean
}

export interface FilterButtonProps {
    text: string,
    opt: string[],
    setIsChecked: (isChecked: boolean) => void,
    isChecked: boolean
}
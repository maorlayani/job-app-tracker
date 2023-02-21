export interface FilterModalProps {
    onToggleFilterModal: (isModalOpen: boolean, type: string) => void,
    setIsFilterChecked: (isFilterChecked: boolean) => void,
    opt: string[],
    type: string
}
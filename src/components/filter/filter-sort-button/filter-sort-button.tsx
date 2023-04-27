import { FilterSortButtonProps } from "./interfaces-filter-sort-button"
import { StyleFilterdSortButton } from "./styled-filter-sort-button"

export const FilterSortButton: React.FC<FilterSortButtonProps> = ({ text }) => {
    return <StyleFilterdSortButton>
        Sort by</StyleFilterdSortButton>
}
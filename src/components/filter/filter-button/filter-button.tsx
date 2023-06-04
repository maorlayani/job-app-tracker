import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"
import { toggleFilterModal } from "../../../store/reducers/tracker-slice"
import { RootState } from "../../../store/store"
import { FilterModal } from "../filter-modal/filter-modal"
import { FilterButtonProps } from "./interfaces-filter-button"
import { FilterButtonWrapper, StyledFilterButton } from "./styled-filter-button"

export const FilterButton: React.FC<FilterButtonProps> = ({ text, opt, isChecked, setIsChecked }) => {
    const [isFilterChecked, setIsFilterChecked] = useState(false)
    const dispatch = useAppDispatch()
    const filterModal = useAppSelector((state: RootState) => state.tracker.filterModal)

    useEffect(() => {
        if (isChecked) setIsFilterChecked(false)
    })

    const onToggleFilterModal = (isModalOpen: boolean, type: string) => {
        if (filterModal.type !== type) dispatch(toggleFilterModal({ isModalOpen: true, type }))
        else dispatch(toggleFilterModal({ isModalOpen, type }))
        setIsChecked(false)
    }

    return <FilterButtonWrapper>
        <StyledFilterButton isFilterChecked={isFilterChecked} onClick={() => onToggleFilterModal(!filterModal.isModalOpen, text.toLowerCase())}>
            <span>{text}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
            </span>
        </StyledFilterButton>
        {filterModal.isModalOpen && filterModal.type === text.toLowerCase() &&
            <FilterModal
                onToggleFilterModal={onToggleFilterModal}
                setIsFilterChecked={setIsFilterChecked}
                opt={opt}
                type={text} />}
    </FilterButtonWrapper>
}
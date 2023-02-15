import { useEffect, useState } from "react"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { toggleFilterModal } from "../store/reducers/tracker-slice"
import { RootState } from "../store/store"
import { FilterModal } from "./filter-modal"



const FilterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
interface StyledFilterButtonProps {
    isFilterChecked: boolean
}

const StyledFilterButton = styled.button<StyledFilterButtonProps>`
    border-radius: 1.6rem;
    font-size: 1em;
    padding: 4px 12px;
    height: 32px;
    box-shadow: inset 0 0 0 1px${props => props.isFilterChecked ? '#ffffff' : '#0000004c'} ;
    border: none;
    color: ${props => props.isFilterChecked ? '#ffffff' : '#00000099'} ;
    background-color:${props => props.isFilterChecked ? '#ae84d1' : '#ffffff'};
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition-property: background-color,box-shadow, color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;

   span:last-child {
        margin-inline-start: 4px;
}
    &:hover{
        cursor: pointer;
        box-shadow: inset 0 0 0 ${props => !props.isFilterChecked ? ' 2px #0000004c' : '1px'} ;
        background-color:${props => !props.isFilterChecked ? 'rgba(0,0,0,0.08)' : ''};
        color: ${props => !props.isFilterChecked ? '#00000099)' : ''} ;

    }
    &:active{
        box-shadow: inset 0 0 0 ${props => !props.isFilterChecked ? '2px #00000099' : '1px'} ;
        color: ${props => !props.isFilterChecked ? 'rgba(0,0,0,0.9)' : ''} ;
        background-color:${props => props.isFilterChecked ? '#a36ccf' : ''};
    }
`

interface FilterButtonProps {
    text: string,
    opt: string[],
    setIsChecked: (isChecked: boolean) => void,
    isChecked: boolean
}

export const FilterButton: React.FC<FilterButtonProps> = ({ text, opt, isChecked, setIsChecked }) => {
    const [isFilterChecked, setIsFilterChecked] = useState(false)
    const dispatch = useAppDispatch()
    const filterModal = useAppSelector((state: RootState) => state.tracker.filterModal)

    useEffect(() => {
        if (isChecked) setIsFilterChecked(false)
    })

    const onToggleFilterModal = (isModalOpen: boolean, type: string) => {
        if (filterModal.type !== type) {
            dispatch(toggleFilterModal({ isModalOpen: true, type }))
        }
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
import { useEffect, useState } from "react"
import styled from "styled-components"
import { FilterModal } from "./filter-modal"



const FilterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
interface StyledFilterButtonProps {
    isFilterChecked: boolean
}

const StyledFilterButton = styled.button<StyledFilterButtonProps>`
    border-radius: 1.59rem;
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

   span:last-child {
        margin-inline-start: 4px;
}

&:hover{
    cursor: pointer;
}
`
interface FilterButtonProps {
    text: string,
    opt: string[],
    setIsChecked: (isChecked: boolean) => void,
    isChecked: boolean
}

export const FilterButton: React.FC<FilterButtonProps> = ({ text, opt, isChecked, setIsChecked }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFilterChecked, setIsFilterChecked] = useState(false)

    useEffect(() => {
        if (isChecked) setIsFilterChecked(false)
    })

    const onToggleFilterModal = () => {
        setIsModalOpen(!isModalOpen)
        setIsChecked(false)
    }

    return <FilterButtonWrapper>
        <StyledFilterButton isFilterChecked={isFilterChecked} onClick={onToggleFilterModal}>
            <span>{text}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
            </span>
        </StyledFilterButton>
        {isModalOpen && <FilterModal
            onToggleFilterModal={onToggleFilterModal}
            setIsFilterChecked={setIsFilterChecked}
            opt={opt}
            type={text} />}
    </FilterButtonWrapper>
}
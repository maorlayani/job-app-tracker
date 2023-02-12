import { useState } from "react"
import styled from "styled-components"
import { FilterModal } from "./filter-modal"


interface FilterButtonProps {
    text: string,
    opt: string[]
}
const FilterButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledFilterButton = styled.button`
    border-radius: 1.59rem;
    font-size: 1em;
    padding: 4px 12px;
    height: 32px;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,0.3);
    border: none;
    color: rgba(0,0,0,0.6);
    background-color: #ffffff;
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

export const FilterButton: React.FC<FilterButtonProps> = ({ text, opt }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onToggleFilterModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return <FilterButtonWrapper>
        <StyledFilterButton onClick={onToggleFilterModal}>
            <span>{text}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                    <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
            </span>
        </StyledFilterButton>
        {isModalOpen && <FilterModal onToggleFilterModal={onToggleFilterModal} opt={opt} type={text} />}
    </FilterButtonWrapper>
}
import { BiFilter } from "react-icons/bi"
import styled from "styled-components"
import { StyledResetButton } from "../../styles/buttons.styled"
import { FilterToggleButtonProps } from "./interfaces-application-filter"

const StyledFilterToggleButton = styled.div`
    display: flex;
    font-size: 1.5em;
    align-self: flex-end;
    height: 24px;
    witdh: 24px;
    padding: .25em;
    color: #00000099;
    &:hover{
        cursor: pointer;
    }
`
const OpenFilterButton = styled(StyledResetButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .7em;
    min-width: fit-content;
    margin-inline-end: 10px;
    svg{
       margin-block-end: 3px;
    }
`
export const FilterToggleButton: React.FC<FilterToggleButtonProps> = ({ isFilterOpen, setIsFilterOpen }) => {
    return (
        <StyledFilterToggleButton title="Filter" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <OpenFilterButton>
                <BiFilter />Filter
            </OpenFilterButton>
        </StyledFilterToggleButton>
    )
}
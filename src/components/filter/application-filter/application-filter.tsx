import { useAppDispatch } from "../../../hooks/redux-hooks"
import { useState } from "react"
import { setFilterBy } from "../../../store/reducers/tracker-slice"
import { FilterTextSearch } from "./filter-text-search"
import { FilterButtonList } from "./filter-button-list"
import { FilterToggleButton } from "./filter-toggle-button"
import styled from "styled-components"

interface StyledApplicationFilterProps {
    isFilterOpen: boolean
}
const StyledApplicationFilter = styled.div<StyledApplicationFilterProps>`
    width: 100%;
    margin-block-end: .5em;
    box-shadow: ${props => props.isFilterOpen ? `-1px -1px 3px 2px var(--secondary-text)` : ``};
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    align-items: center;
`
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em 1.5em 0 1.5em;
    gap: 1em;
    color: var(--filter-text);
    width: 500px;
    @media (max-width: 500px) {
        gap: .5em;
        font-size: .9rem;
        width: 370px;
    }
    @media (min-width: 800px) {
        width: 700px;
    }
    @media (min-width: 1050px) {
        flex-direction: row;
        justify-content: center;
        width: 1050px;
    }
`
const VerticaLine = styled.div`
    width: 2px;
    height: 90%; 
    background-color: #0000004c; 
    display: none;
    @media (min-width: 1050px) {
        display: block;
    }
`

export const ApplicationFilter = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useAppDispatch()

    const onResetFilter = () => {
        setIsChecked(true)
        setSearchInput('')
        dispatch(setFilterBy({ location: [], position: [], status: [], searchInput: '' }))
    }

    return (
        <StyledApplicationFilter isFilterOpen={isFilterOpen}>
            {isFilterOpen && <MainContent>
                <FilterTextSearch searchInput={searchInput} setSearchInput={setSearchInput} />
                <VerticaLine></VerticaLine>
                <FilterButtonList isChecked={isChecked} setIsChecked={setIsChecked} onResetFilter={onResetFilter} />
            </MainContent>}
            <FilterToggleButton isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
        </StyledApplicationFilter>
    )
} 
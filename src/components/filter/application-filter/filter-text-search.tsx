import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"
import { setFilterBy } from "../../../store/reducers/tracker-slice"
import { RootState } from "../../../store/store"
import { StyledButton } from "../../styles/buttons.styled"
import { FilterTextSearchProps } from "./interfaces-application-filter"
import { Input } from "../../styles/input.styled"

const StyledFilterTextSearch = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
`
const StyledSearchInput = styled(Input)`
    width: 100%;
    height: 32px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px #0000004c;
    font-family: inherit;
    color: inherit;
    font-size: .9rem;
    @media (max-width: 500px) {
        width: 265px;
        height: 30px;
    }
    @media (min-width: 800px) {
         width: 100%;
    }
`
export const StyledSearchButton = styled(StyledButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.6em;
    padding: 7px 13px;
    font-size: 1em;
    color: #ae84d1;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #ae84d1;
    transition-property: background-color,box-shadow, color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    &:hover {
      background-color: #f5d5ff78;
      cursor: pointer;
        box-shadow: inset 0 0 0 2px #ae84d1;
    }
    &:active {
        box-shadow: inset 0 0 0 2px #906dac;
        color: #906dac;
        background-color: #f5d5ff78;
    }
   @media (max-width: 500px) {
        height: 30px;
    }  
`

export const FilterTextSearch: React.FC<FilterTextSearchProps> = ({ searchInput, setSearchInput }) => {
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)
    const dispatch = useAppDispatch()

    const onSetSearch = () => {
        dispatch(setFilterBy({ ...filterBy, searchInput: searchInput }))
    }

    const onHandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(ev.target.value)
    }

    return (
        <StyledFilterTextSearch>
            <StyledSearchInput type="text" value={searchInput} onChange={onHandleChange} placeholder="Enter a keyword..." />
            <StyledSearchButton onClick={onSetSearch}>Search</StyledSearchButton>
        </StyledFilterTextSearch>
    )
}
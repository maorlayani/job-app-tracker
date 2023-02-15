import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { RootState } from "../store/store"
import { application, status } from '../interfaces/trakcer'
import { trackerService } from "../services/tracker.service"
import { useEffect, useState } from "react"
import { FilterButton } from "./filter-button"
import { StyledButton } from "./styles/button.styled"
import { setFilterBy } from "../store/reducers/tracker-slice"

const StyledCustomSelectFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3em 0 1em 3em;
    gap: 1em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #00000099;
`
const StyledResetButton = styled(StyledButton)`
    background-color: transparent;
    color: inherit;
    font-weight: 600;
    font-family: inherit;
    padding: .4em;
    border-radius: 6px;
    &:hover{
        background-color: #00000014;
    }
    &:active{
        background-color: #0000001e;
        color: #000000e5
    }
`
const FlexContainer = styled.div`
    display: flex;
    gap: 1em;
`
const StyledSearchButton = styled(StyledButton)`
    border-radius: 1.6rem;
    padding: 7px 13px;
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #ae84d1;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #ae84d1;
    transition-property: background-color,box-shadow, color;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: 167ms;
    &:hover{
      background-color: #f5d5ff78;
      cursor: pointer;
    box-shadow: inset 0 0 0 2px #ae84d1;
    }
    &:active{
        box-shadow: inset 0 0 0 2px #906dac;
        color: #906dac;
        background-color: #f5d5ff78;
   }
`

const StyledInput = styled.input`
    width: 290px;
    border-radius: 6px;
    outline: none;
    border: none;
    padding: .3em .5em;
    box-shadow: inset 0 0 0 1px #0000004c;
    font-family: inherit;
    color: inherit;
`

interface Options {
    location: string[],
    position: string[]
}

export const ApplicationFilter = () => {

    const [options, setOptions] = useState<Options>({ location: [], position: [] })
    const [isChecked, setIsChecked] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useAppDispatch()
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = async () => {
        try {
            const applications: application[] =
                await trackerService.getApplications({ location: [], position: [], status: [], serachInput: '' })
            const locationOpt = removeDuplicates(applications, 'location')
            const positionOpt = removeDuplicates(applications, 'position')
            setOptions({ location: locationOpt, position: positionOpt })
        } catch (err) {
            console.error('Cannot get filtered applications', err)
        }
    }

    const removeDuplicates = (array: application[], key: 'location' | 'position') => {
        let typeOpt = array.map(app => app[key])
        typeOpt = typeOpt.filter((val, idx, arr) => arr.indexOf(val) === idx)
        return typeOpt
    }

    const getAllAppStatus = () => {
        return [status.submitted, status.assignment, status.interview, status.contract, status.rejection]
    }

    const onResetFilter = () => {
        setIsChecked(true)
        setSearchInput('')
        dispatch(setFilterBy({ location: [], position: [], status: [], serachInput: '' }))
    }

    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(ev.target.value)
    }

    const onSetSearch = () => {
        console.log(searchInput);
        dispatch(setFilterBy({ ...filterBy, serachInput: searchInput }))
    }

    return <StyledCustomSelectFilter>
        <FlexContainer>
            <StyledInput type="text" value={searchInput} onChange={changeHandler} />
            <StyledSearchButton onClick={onSetSearch}>Search</StyledSearchButton>
        </FlexContainer>
        <FlexContainer>
            <FilterButton text='Location' opt={options.location} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Position' opt={options.position} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Status' opt={getAllAppStatus()} isChecked={isChecked} setIsChecked={setIsChecked} />
            <StyledResetButton onClick={onResetFilter}>Reset</StyledResetButton>
        </FlexContainer>
    </StyledCustomSelectFilter>
} 
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { RootState } from "../store/store"
import { CustomSelectFilter } from "./custom-select-filter"
import { application, status } from '../interfaces/trakcer'
import { trackerService } from "../services/tracker.service"
import { useEffect, useState } from "react"
import { FilterButton } from "./filter-button"
import { StyledButton } from "./styles/button.styled"
import { setFilterBy } from "../store/reducers/tracker-slice"

const StyledCustomSelectFilter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 3em 0 1em 3em;
    gap: 1em;
`
const StyledResetButton = styled(StyledButton)`
    background-color: transparent;
    color: #00000099;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
interface Options {
    location: string[],
    position: string[]
}

export const ApplicationFilter = () => {

    const [options, setOptions] = useState<Options>({ location: [], position: [] })
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = async () => {
        try {
            const applications: application[] =
                await trackerService.getApplications({ location: [], position: [], status: [] })
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
        dispatch(setFilterBy({ location: [], position: [], status: [] }))
    }

    return <StyledCustomSelectFilter>
        <FilterButton text='Location' opt={options.location} isChecked={isChecked} setIsChecked={setIsChecked} />
        <FilterButton text='Position' opt={options.position} isChecked={isChecked} setIsChecked={setIsChecked} />
        <FilterButton text='Status' opt={getAllAppStatus()} isChecked={isChecked} setIsChecked={setIsChecked} />
        <StyledResetButton onClick={onResetFilter}>Reset</StyledResetButton>
    </StyledCustomSelectFilter>
} 
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"
import { RootState } from "../../../store/store"
import { Application } from '../../../modules/interfaces'
import { Status } from '../../../modules/enums'
import { trackerService } from "../../../services/tracker.service"
import { useEffect, useState } from "react"
import { FilterButton } from "../filter-button/filter-button"
import { setFilterBy } from "../../../store/reducers/tracker-slice"
import { Options } from "./styled-application-filter"
import { FlexContainer, StyledCustomSelectFilter, StyledInput, StyledResetButton, StyledSearchButton } from "./interfaces-application-filter"
import { UploadExcelFile } from "../../upload-excel-file"

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
            const applications: Application[] =
                await trackerService.getApplications({ location: [], position: [], status: [], serachInput: '' })
            const locationOpt = removeDuplicates(applications, 'location')
            const positionOpt = removeDuplicates(applications, 'position')
            setOptions({ location: locationOpt, position: positionOpt })
        } catch (err) {
            console.error('Cannot get filtered applications', err)
        }
    }

    const removeDuplicates = (array: Application[], key: 'location' | 'position') => {
        let typeOpt = array.map(app => app[key])
        typeOpt = typeOpt.filter((val, idx, arr) => arr.indexOf(val) === idx)
        return typeOpt
    }

    const getAllAppStatus = () => {
        return [Status.submitted, Status.assignment, Status.interview, Status.contract, Status.rejection]
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
            <UploadExcelFile />
        </FlexContainer>
        <FlexContainer>
            <FilterButton text='Location' opt={options.location} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Position' opt={options.position} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Status' opt={getAllAppStatus()} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Sort by' opt={['Date: Newest to Oldest', 'Date: Oldest to Newest']} isChecked={isChecked} setIsChecked={setIsChecked} />
            <StyledResetButton onClick={onResetFilter}>Reset</StyledResetButton>
        </FlexContainer>
    </StyledCustomSelectFilter>
} 
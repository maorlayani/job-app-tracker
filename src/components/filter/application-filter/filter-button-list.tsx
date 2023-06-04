import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { Status } from "../../../models/enums"
import { Application, FilterBy } from "../../../models/interfaces"
import { trackerService } from "../../../services/tracker.service"
import { utilService } from "../../../services/util.service"
import { StyledResetButton } from "../../styles/buttons.styled"
import { FilterButton } from "../filter-button/filter-button"
import { FilterButtonListProps, Options } from "./interfaces-application-filter"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"
import { RootState } from "../../../store/store"
import { setLoaction, setPosition } from "../../../store/reducers/tracker-slice"

const StyledFilterButtonList = styled.div`
    display: flex;
    gap: .5em;
    align-self: flex-start;
    @media (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (min-width: 800px) {
        gap: 1em;
    }
    @media (min-width: 1050px) {
        gap: .5em; 
    }
    @media (min-width: 1270px) {
        gap: 1em;
    }
`

export const FilterButtonList: React.FC<FilterButtonListProps> = ({ isChecked, setIsChecked, onResetFilter }) => {
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const position = useAppSelector((state: RootState) => state.tracker.position)
    const location = useAppSelector((state: RootState) => state.tracker.location)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (!filterBy.position.length &&
            !filterBy.location.length &&
            !filterBy.status.length) getOptions()
    }, [applications])

    const getOptions = () => {
        const applicationsToFilter = applications.filter(app => !app.isArchived)
        const locationOpt = utilService.removeDuplicates(applicationsToFilter, 'location')
        dispatch(setLoaction(locationOpt))
        const positionOpt = utilService.removeDuplicates(applicationsToFilter, 'position')
        dispatch(setPosition(positionOpt))
    }

    const getAllAppStatus = () => {
        return [Status.submitted, Status["home assignment"], Status["scheduled interview"], Status.contract, Status.rejection]
    }

    return (
        <StyledFilterButtonList>
            <FilterButton text='Location' opt={location} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Position' opt={position} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Status' opt={getAllAppStatus()} isChecked={isChecked} setIsChecked={setIsChecked} />
            {/* <FilterButton text='Sort by' opt={['Date: Newest to Oldest', 'Date: Oldest to Newest']} isChecked={isChecked} setIsChecked={setIsChecked} /> */}
            <StyledResetButton onClick={onResetFilter}>Reset</StyledResetButton>
        </StyledFilterButtonList>
    )
}
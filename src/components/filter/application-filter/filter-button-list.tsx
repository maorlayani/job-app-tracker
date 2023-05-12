import { useEffect, useState } from "react"
import styled from "styled-components"
import { Status } from "../../../models/enums"
import { Application, FilterBy } from "../../../models/interfaces"
import { trackerService } from "../../../services/tracker.service"
import { utilService } from "../../../services/util.service"
import { StyledResetButton } from "../../styles/buttons.styled"
import { FilterButton } from "../filter-button/filter-button"
import { FilterButtonListProps, Options } from "./interfaces-application-filter"

const StyledFilterButtonList = styled.div`
    display: flex;
    gap: .5em;
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
    const [options, setOptions] = useState<Options>({ location: [], position: [] })

    useEffect(() => {
        getOptions()
    }, [])

    const getOptions = async () => {
        try {
            const applications: Application[] =
                await trackerService.getApplications()
            const locationOpt = utilService.removeDuplicates(applications, 'location')
            const positionOpt = utilService.removeDuplicates(applications, 'position')
            setOptions({ location: locationOpt, position: positionOpt })
        } catch (err) {
            console.error('Cannot get filtered applications', err)
        }
    }

    const getAllAppStatus = () => {
        return [Status.submitted, Status["home assignment"], Status["scheduled interview"], Status.contract, Status.rejection]
    }

    return (
        <StyledFilterButtonList>
            <FilterButton text='Location' opt={options.location} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Position' opt={options.position} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Status' opt={getAllAppStatus()} isChecked={isChecked} setIsChecked={setIsChecked} />
            <FilterButton text='Sort by' opt={['Date: Newest to Oldest', 'Date: Oldest to Newest']} isChecked={isChecked} setIsChecked={setIsChecked} />
            <StyledResetButton onClick={onResetFilter}>Reset</StyledResetButton>
        </StyledFilterButtonList>
    )
}
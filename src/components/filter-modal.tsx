import { useState } from "react"
import styled from "styled-components"
import closeIcon from '../assets/svg/close-icon.svg'
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks"
import { application, FilterBy } from "../interfaces/trakcer"
import { trackerService } from "../services/tracker.service"
import { setFilterBy } from "../store/reducers/tracker-slice"
import { RootState } from "../store/store"
import { FilterCheckbox } from "./filter-checkbox"
import { StyledButton } from "./styles/button.styled"

const StyledFilterModal = styled.div`
    width: 300px;  
    background-color: #fff;
    position: absolute;
    top: 85px;
    border-radius: .8em;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08) ,0px 4px 4px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    font-size: .9em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ImgContainer = styled.div`
    display: flex;
    align-self: flex-end;
    padding: .8em .8em 0 0;
    &:hover{
        cursor: pointer;
    }
`
const FilterButton = styled(StyledButton)`
    font-size: .9em;
    margin: 10px;
`

const FilterButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid lightgray;
`
interface FilterModalProps {
    onToggleFilterModal: () => void,
    opt: string[],
    type: string
}

export const FilterModal: React.FC<FilterModalProps> = ({ onToggleFilterModal, opt, type }) => {
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)

    const [filterByState, setFilterByState] = useState<FilterBy>({ ...filterBy })
    const [numberOfResults, setNumberOfResults] = useState<number>(applications.length)
    const dispatch = useAppDispatch()

    console.log('numberOfResults', numberOfResults);

    const checkboxHandler = (type: string, label: string) => {
        if (type === 'location') {
            let locations: string[]
            if (filterByState.location.includes(label)) {
                locations = filterByState.location.filter(loc => loc !== label)
            } else {
                locations = [...filterByState.location, label]
            }
            setFilterByState(prevFilterByState => ({ ...prevFilterByState, location: locations }))
            filterApplication(type, locations)
        }
    }
    // Todo: Move func to service 
    const filterApplication = async (type: string, filter: string[]) => {
        try {
            let filteredApplication: application[] = []
            const applicationFromServer: application[] = await trackerService.getApplications()
            if (type === 'location') {
                if (filter.length > 0) {
                    filteredApplication =
                        applicationFromServer.filter(app => filter.find(loc => loc === app.location))
                    console.log('filteredApplication', filteredApplication);
                } else {
                    filteredApplication = applicationFromServer
                }

                setNumberOfResults(filteredApplication.length)
            }
        } catch (err) {
            console.error(`Cannot find number of ${type}s`)
        }
    }

    const onSetFilterBy = () => {
        dispatch(setFilterBy(filterByState))
    }

    const onCloseFilterModal = () => {
        onToggleFilterModal()
        dispatch(setFilterBy({ ...filterByState, [type]: [] }))
        filterApplication(type, [])
    }

    return <StyledFilterModal>
        <ImgContainer>
            <img src={closeIcon} alt="close icon" onClick={onToggleFilterModal} />
        </ImgContainer>
        {opt.map(option => <div key={option} style={{ display: 'flex', gap: '7px', padding: '7px' }}>
            <FilterCheckbox label={option} checkboxHandler={checkboxHandler} type={type.toLowerCase()}></FilterCheckbox>
        </div>)}
        <FilterButtonContainer>
            <FilterButton onClick={onCloseFilterModal}>Cancel</FilterButton>
            <FilterButton onClick={onSetFilterBy}>Show {numberOfResults} Results</FilterButton>
        </FilterButtonContainer>
    </StyledFilterModal >
}
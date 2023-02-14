import { useEffect, useState } from "react"
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
const StyledFilterModalButton = styled(StyledButton)`
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
    setIsFilterChecked: (isFilterChecked: boolean) => void,
    opt: string[],
    type: string
}

export const FilterModal: React.FC<FilterModalProps> = ({ onToggleFilterModal, setIsFilterChecked, opt, type }) => {
    const applications = useAppSelector((state: RootState) => state.tracker.applications)
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)

    const [filterByState, setFilterByState] = useState<FilterBy>({ ...filterBy })
    const [numberOfResults, setNumberOfResults] = useState<number | string>('')
    const dispatch = useAppDispatch()


    const checkboxHandler = (type: string, label: string) => {
        if (type === 'location' || type === 'position' || type === 'status') {
            let results: string[]
            if (filterByState[type].includes(label)) {
                results = filterByState[type].filter(typ => typ !== label)
            } else {
                results = [...filterByState[type], label]
            }
            setFilterByState(prevFilterByState => ({ ...prevFilterByState, [type]: results }))
            filterApplication(type, results)
        }
    }
    // Todo: Move func to service 
    const filterApplication = async (type: string, results: string[]) => {
        try {
            let filteredApplication: application[] = []
            const applicationFromServer: application[] = await trackerService.getApplications()
            if (type === 'location' || type === 'position' || type === 'status') {
                if (results.length > 0) {
                    filteredApplication =
                        applicationFromServer.filter(app => results.find(loc => loc === app[type]))
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
        setFilterButtonTheme()
        onToggleFilterModal()
    }

    const onCloseFilterModal = () => {
        onToggleFilterModal()
        dispatch(setFilterBy({ ...filterByState, [type.toLowerCase()]: [] }))
        setIsFilterChecked(false)
        filterApplication(type, [])
    }

    const setFilterButtonTheme = () => {
        const keyType: string = type.toLowerCase()
        if (keyType === 'location' || keyType === 'position' || keyType === 'status') {
            if (filterByState[keyType].length) {
                console.log(filterByState);
                setIsFilterChecked(true)
            } else setIsFilterChecked(false)
        }
    }

    return <StyledFilterModal>
        <ImgContainer>
            <img src={closeIcon} alt="close icon" onClick={onToggleFilterModal} />
        </ImgContainer>
        {opt.map(option => <div key={option} style={{ display: 'flex', gap: '7px', padding: '7px' }}>
            <FilterCheckbox label={option} checkboxHandler={checkboxHandler} type={type.toLowerCase()}></FilterCheckbox>
        </div>)}
        <FilterButtonContainer>
            <StyledFilterModalButton onClick={onCloseFilterModal}>Cancel</StyledFilterModalButton>
            <StyledFilterModalButton onClick={onSetFilterBy}>Show {numberOfResults} Results</StyledFilterModalButton>
        </FilterButtonContainer>
    </StyledFilterModal >
}
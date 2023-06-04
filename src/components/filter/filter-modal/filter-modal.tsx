import { useState } from "react"
import closeIcon from '../../../assets/svg/close-icon.svg'
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks"
import { Application, FilterBy } from "../../../models/interfaces"
import { trackerService } from "../../../services/tracker.service"
import { setFilterBy } from "../../../store/reducers/tracker-slice"
import { RootState } from "../../../store/store"
import { FilterCheckbox } from "../filter-checkbox/filter-checkbox"
import { ImgCloseIconContainer } from "../../styles/img-close-icon-container"
import { FilterModalProps } from "./interfaces-filter-modal"
import { FilterButtonContainer, OptionsContainer, StyledFilterModal, StyledFilterModalButton } from "./styled-filter-modal"

export const FilterModal: React.FC<FilterModalProps> = ({ onToggleFilterModal, setIsFilterChecked, opt, type }) => {
    const filterBy = useAppSelector((state: RootState) => state.tracker.filterBy)
    const [filterByState, setFilterByState] = useState<FilterBy>({ ...filterBy })
    const dispatch = useAppDispatch()

    const checkboxHandler = (type: string, label: string) => {
        if (type === 'location' || type === 'position' || type === 'status') {
            let results: string[]
            if (filterByState[type].includes(label)) results = filterByState[type].filter(typ => typ !== label)
            else results = [...filterByState[type], label]
            setFilterByState(prevFilterByState => ({ ...prevFilterByState, [type]: results }))
        }
    }

    const onSetFilterBy = () => {
        dispatch(setFilterBy(filterByState))
        setFilterButtonTheme()
        onToggleFilterModal(false, 'type')
    }

    const onCloseFilterModal = () => {
        onToggleFilterModal(false, '')
        dispatch(setFilterBy({ ...filterByState, [type.toLowerCase()]: [] }))
        setIsFilterChecked(false)
    }

    const setFilterButtonTheme = () => {
        const keyType: string = type.toLowerCase()
        if (keyType === 'location' || keyType === 'position' || keyType === 'status') {
            if (filterByState[keyType].length) setIsFilterChecked(true)
            else setIsFilterChecked(false)
        }
    }

    return <StyledFilterModal>
        <ImgCloseIconContainer>
            <img src={closeIcon} alt="close icon" onClick={() => onToggleFilterModal(false, '')} />
        </ImgCloseIconContainer>
        <OptionsContainer>
            {opt.map(option => <div key={option} style={{ display: 'flex', gap: '7px', padding: '7px' }}>
                <FilterCheckbox label={option} checkboxHandler={checkboxHandler} type={type.toLowerCase()}></FilterCheckbox>
            </div>)}
        </OptionsContainer>
        <FilterButtonContainer>
            <StyledFilterModalButton onClick={onCloseFilterModal}>Cancel</StyledFilterModalButton>
            <StyledFilterModalButton onClick={onSetFilterBy}>Show Results</StyledFilterModalButton>
        </FilterButtonContainer>
    </StyledFilterModal>
}
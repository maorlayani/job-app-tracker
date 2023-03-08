import { TechModal } from "../add-application/styled-add-application"
import { FilterButtonContainer, OptionsContainer, StyledFilterModalButton } from "../filter/filter-modal/styled-filter-modal"
import { ImgCloseIconContainer } from "../styles/img-close-icon-container"
import closeIcon from '../../assets/svg/close-icon.svg'
import { AddApplicationModalProps, TechList } from "./interface-add-application-modal"
import { FilterCheckbox } from "../filter/filter-checkbox/filter-checkbox"

export const AddApplicationModal: React.FC<AddApplicationModalProps> = ({ opt, toggleTechList }) => {

    const checkboxHandler = (type: string, label: string) => {
        toggleTechList(label)
    }

    const onCloseFilterModal = () => {

    }

    const onSetFilterBy = () => {

    }

    const onToggleFilterModal = (b: boolean, s: string) => {

    }

    return <TechModal>
        <ImgCloseIconContainer>
            <img src={closeIcon} alt="close icon" onClick={() => onToggleFilterModal(false, '')} />
        </ImgCloseIconContainer>
        <OptionsContainer>
            {opt.map(option => <div key={option} style={{ display: 'flex', gap: '7px', padding: '7px' }}>
                <FilterCheckbox label={option} checkboxHandler={checkboxHandler} type={'tech'}></FilterCheckbox>
            </div>)}
        </OptionsContainer>
        <FilterButtonContainer>
            <StyledFilterModalButton type='button' onClick={onCloseFilterModal}>Cancel</StyledFilterModalButton>
            <StyledFilterModalButton type='button' onClick={onSetFilterBy}>Select Tech</StyledFilterModalButton>
        </FilterButtonContainer>
    </TechModal>
}
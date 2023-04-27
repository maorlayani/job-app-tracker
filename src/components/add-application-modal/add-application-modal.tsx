import { TechModal } from "../add-application/styled-add-application"
import { FilterButtonContainer, OptionsContainer, StyledFilterModalButton } from "../filter/filter-modal/styled-filter-modal"
import { ImgCloseIconContainer } from "../styles/img-close-icon-container"
import closeIcon from '../../assets/svg/close-icon.svg'
import { AddApplicationModalProps, TechList } from "./interface-add-application-modal"
import { FilterCheckbox } from "../filter/filter-checkbox/filter-checkbox"
import { Technology } from "../../models/interfaces"

export const AddApplicationModal: React.FC<AddApplicationModalProps> = (
    { opt, toggleTechList, techList, setIsTechModalOpen }) => {

    const checkboxHandler = (type: string, label: string) => {
        toggleTechList(label)
    }

    const onCloseFilterModal = () => {
        setIsTechModalOpen(false)
    }

    return <TechModal>
        <ImgCloseIconContainer>
            <img src={closeIcon} alt="close icon" onClick={() => onCloseFilterModal()} />
        </ImgCloseIconContainer>
        <OptionsContainer>
            {opt.map(option => <div key={option} style={{ display: 'flex', gap: '7px', padding: '7px' }}>
                <FilterCheckbox
                    label={option}
                    checkboxHandler={checkboxHandler}
                    type={'tech'}
                    techList={techList}></FilterCheckbox>
            </div>)}
        </OptionsContainer>
        {/* <FilterButtonContainer>
            <StyledFilterModalButton type='button' onClick={onCloseFilterModal}>Cancel</StyledFilterModalButton>
            <StyledFilterModalButton type='button' onClick={onSetFilterBy}>Select Tech</StyledFilterModalButton>
        </FilterButtonContainer> */}
    </TechModal>
}
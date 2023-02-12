import styled from "styled-components"
import closeIcon from '../assets/svg/close-icon.svg'
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
interface FilterModalProps {
    onToggleFilterModal: () => void,
    opt: string[]
}

export const FilterModal: React.FC<FilterModalProps> = ({ onToggleFilterModal, opt }) => {
    return <StyledFilterModal>
        <ImgContainer>
            <img src={closeIcon} alt="" onClick={onToggleFilterModal} />
        </ImgContainer>
        {opt.map(option => <div key={option} style={{ display: 'flex', gap: '7px', padding: '7px' }}>
            <FilterCheckbox label={option}></FilterCheckbox>
        </div>)}
        <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid lightgrey' }}>
            <FilterButton>Cancel</FilterButton>
            <FilterButton>Show Results</FilterButton>
        </div>
    </StyledFilterModal >
}
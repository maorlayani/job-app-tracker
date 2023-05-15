import styled from 'styled-components'
import { StyledButton } from '../styles/buttons.styled'
import { ImgCloseIconContainer } from '../styles/img-close-icon-container'
import closeIcon from '../../assets/svg/close-icon.svg'

const StyledActionModal = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    min-height: 100px;
    background-color: #fff;
    right: 10%;
    border-radius: 6px;
    box-shadow: 0px 8px 12px #091E4226, 0px 0px 1px #091E424F;
    padding: 1em;
    z-index: 100;
`
const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1em;
    border-bottom: 1px solid #091e4221;
    margin-block-start: -15px;
`
const ModalTitle = styled.span`
    font-size: 1.1em;
    padding-bottom: 1em;
    font-weight: 600;
`
const ContentContiner = styled.div`
    margin-block-start: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`
const ModalContent = styled.span`
    font-size: 1em;
    text-align: center;
`
const ActionButton = styled(StyledButton)`
    background-color: #CA3521;
    border-radius: 3px;
    &:hover {
        background-color: #AE2A19;
    }
    &:active {
        background-color: #6e2f1a;
    }
`
const CloseIconContainer = styled(ImgCloseIconContainer)`
    padding: 0;
`
interface ActionModalProps {
    classname?: string,
    title: string,
    msg: string,
    btnTxt: string,
    onAction: () => void,
    onClose: () => void
}

export const ActionModal: React.FC<ActionModalProps> = ({ classname, title, msg, btnTxt, onAction, onClose, ...props }) => {
    return (
        <StyledActionModal className={classname} {...props}>
            <CloseIconContainer>
                <img src={closeIcon} alt="close icon" onClick={onClose} />
            </CloseIconContainer>
            <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
            <ContentContiner>
                <ModalContent>{msg}</ModalContent>
                <ActionButton onClick={onAction}>{btnTxt}</ActionButton>
            </ContentContiner>
        </StyledActionModal>
    )
}
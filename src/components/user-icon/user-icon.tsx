import styled from 'styled-components'
import { userService } from '../../services/user.service'
import { useEffect, useState } from 'react'
import { ActionModal } from '../action-modal/action-modal'
const StyledUserIcon = styled.div`
    height: 40px;
    width: 40px;
    // background-color: #c2e6f1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImgIcon = styled.img`
    border-radius: 50%;
    background-color: #fff;
`
export const UserIcon = () => {
    const [isUserModalOpen, setIsUserModalOpen] = useState(false)


    return (<>
        <StyledUserIcon onClick={() => setIsUserModalOpen(!isUserModalOpen)}>
            <ImgIcon src={userService.getUserInitials()} />
        </StyledUserIcon>
        {/* <ActionModal /> */}
    </>
    )
}
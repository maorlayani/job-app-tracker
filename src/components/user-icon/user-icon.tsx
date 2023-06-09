import styled from 'styled-components'
import { userService } from '../../services/user.service'
import { useAppSelector } from '../../hooks/redux-hooks'
import { RootState } from '../../store/store'

const StyledUserIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImgIcon = styled.img`
    border-radius: 50%;
    background-color: #fff;
    height: 40px;
    width: 40px;
`

export const UserIcon = () => {
    const user = useAppSelector((state: RootState) => state.user.user)
    const userGuestIconUrl = 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1670317536/170_t4mend.png'
    return (<>
        <StyledUserIcon>
            <ImgIcon src={user ? userService.getUserInitials(user.username) : userGuestIconUrl} />
        </StyledUserIcon>
    </>
    )
}
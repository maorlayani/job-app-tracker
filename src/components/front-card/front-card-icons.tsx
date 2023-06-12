import { BsFillBookmarkDashFill } from "react-icons/bs"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { Application } from "../../models/interfaces"
import { updateApplication } from "../../store/reducers/tracker-slice"
import { StyledIconProps } from "../card/interfaces-card"
import { FrontCardProps } from "./interfaces-front-card"
import { RootState } from "../../store/store"

export const StyeldFrontCardIcons = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1em 1em 0 1em;
    font-size: 0.8em;
    gap: 1em;
`

export const StyledIcon = styled.div<StyledIconProps>`
    // background-color: #fff;
    border-radius: 50%;
    height: 19px;
    width: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.isMarked ? 'var(--accent)' : 'var(--primary-button)'};
    font-size: 1.4em;
`

export const FrontCardIcons: React.FC<FrontCardProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state: RootState) => state.user.user)

    const togglePinApplication = (ev: React.MouseEvent<HTMLDivElement>) => {
        ev.stopPropagation()
        const applicationToUpdate: Application = { ...application }
        applicationToUpdate.isPinned = !application.isPinned
        dispatch(updateApplication({ application: applicationToUpdate, JWT: user?.JWT }))
    }
    return (
        <StyeldFrontCardIcons>
            <StyledIcon isMarked={application.isPinned} onClick={togglePinApplication} title="Pinned">
                <BsFillBookmarkDashFill />
            </StyledIcon>
        </StyeldFrontCardIcons>
    )
}
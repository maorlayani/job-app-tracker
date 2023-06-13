import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks"
import { Application } from "../../models/interfaces"
import { setCurrentApplicationDetails, updateApplication } from "../../store/reducers/tracker-slice"
import { CardButton } from "../styles/buttons.styled"
import { CardFace } from "../styles/card.styled"
import { RootState } from "../../store/store"
import { BackCardContent } from "./back-card-content"

const StyledBackCard = styled(CardFace)`
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
`
const BackCardButton = styled(CardButton)`
    margin: 0;
`

export interface BackCardProps {
    application: Application
}
export const BackCard: React.FC<BackCardProps> = ({ application }) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state: RootState) => state.user.user)

    const archiveApplication = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        const applicationToUpdate: Application = { ...application }
        applicationToUpdate.isArchived = true
        applicationToUpdate.archivedDate = Date.now()
        dispatch(updateApplication({ application: applicationToUpdate, JWT: user?.JWT }))

    }
    // const openActivityLog = (ev: React.MouseEvent<HTMLButtonElement>) => {
    //     ev.stopPropagation()
    //     dispatch(setCurrentApplicationDetails(application))
    // }

    return <StyledBackCard>
        <BackCardContent application={application} />
        <BackCardButton onClick={archiveApplication}>Archive</BackCardButton>
    </StyledBackCard>
}
import styled from "styled-components"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { Application } from "../../models/interfaces"
import { updateApplication } from "../../store/reducers/tracker-slice"
import { CardButton } from "../styles/buttons.styled"
import { CardFace } from "../styles/card.styled"

const StyledBackCard = styled(CardFace)`
// background-color: #e8e4e41f;
    background-image: linear-gradient(250deg, #e8e4e41f,#fff);
    // background: linear-gradient(225deg, #cee3f3 0%, #fff 100%);
    // background: linear-gradient(225deg, #cee3f3 0%, #fff 100%);
        // background-color: #cee3f396;  
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`
const BackCardButton = styled(CardButton)`
    background-color: #e8e4e41f;
    margin: 0;
`

interface BackCardProps {
    application: Application
}
export const BackCard: React.FC<BackCardProps> = ({ application }) => {
    const dispatch = useAppDispatch()

    const archiveApplication = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.stopPropagation()
        const applicationToUpdate: Application = { ...application }
        applicationToUpdate.isArchived = true
        applicationToUpdate.archivedDate = Date.now()
        dispatch(updateApplication(applicationToUpdate))
    }

    return <StyledBackCard>
        <h3>More Actions</h3>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Update Status</BackCardButton>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Activity Log</BackCardButton>
        <BackCardButton onClick={archiveApplication}>Archive</BackCardButton>
    </StyledBackCard>
}
import styled from "styled-components"
import { StyledButton } from "../styles/button.styled"
import { Card } from "../styles/card.styled"

const StyledBackCard = styled(Card)`
    // background-image: linear-gradient(250deg,#cee3f396,#fff);
    // background: linear-gradient(225deg, #cee3f3 0%, #fff 100%);
    background: linear-gradient(225deg, #cee3f3 0%, #fff 100%);
        // background-color: #cee3f396;  
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`
const BackCardButton = styled(StyledButton)`
    border-radius: 12px;
    padding: 8px;
    width: 150px;
`
export const BackCard = () => {

    return <StyledBackCard>
        <h3>More Actions</h3>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Update Status</BackCardButton>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Activity Log</BackCardButton>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Archive</BackCardButton>
    </StyledBackCard>
}
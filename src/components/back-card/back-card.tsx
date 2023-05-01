import styled from "styled-components"
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
export const BackCard = () => {

    return <StyledBackCard>
        <h3>More Actions</h3>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Update Status</BackCardButton>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Activity Log</BackCardButton>
        <BackCardButton onClick={(ev) => ev.stopPropagation()}>Archive</BackCardButton>
    </StyledBackCard>
}
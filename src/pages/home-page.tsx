import styled from 'styled-components'
import { HomePageContent } from '../components/home-page-cmps/home-page-content'
import { HomePageSlider } from '../components/home-page-cmps/slider'

const StyledHomePage = styled.div`
    min-height: calc(100vh - 70px);
    width: 100%;
    background-color: var(--background);
`
const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    margin: 0 3rem;
    gap: 3rem;
    @media (max-width: 500px) {
        padding: 40px 20px;
    }
    @media (min-width: 1270px) {
        display: flex;
        flex-direction: row;
    }
`

export const HomePage = () => {
    return (
        <StyledHomePage>
            <MainContentContainer>
                <HomePageContent />
                <HomePageSlider />
            </MainContentContainer>
        </StyledHomePage>
    )
}
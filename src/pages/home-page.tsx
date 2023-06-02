import styled from 'styled-components'
import { HomePageContent } from '../components/home-page-cmps/home-page-content'
import { HomePageSlider } from '../components/home-page-cmps/slider'

const StyledHomePage = styled.div`
    min-height: calc(100vh - 70px);
    width: 100%;
    background-color: #f9fafc;
`
const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 40px 0;
    @media (max-width: 500px) {
        padding: 40px 20px;
        gap: 3em;
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
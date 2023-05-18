import styled from 'styled-components'
import { HomePageContent } from '../components/home-page-cmps/home-page-content'
import { HomePageSlider } from '../components/home-page-cmps/slider'

const StyledHomePage = styled.div`
    height: 100vh;
    width: 100%;
    // background-image: linear-gradient(45deg, #D4DCE1, #fff);
    background-color: #f9fafc;
    overflow-x: auto;
`
const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin: 120px 50px 120px 50px;
    @media (max-width: 500px) {
        margin: 120px 20px 100px 20px;
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
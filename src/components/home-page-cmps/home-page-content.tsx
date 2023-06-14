import styled from 'styled-components'
import { HomePageCallToAction } from './home-page-call-to-action'

const StyledHomePageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContentTitle = styled.h1`
    font-size: 2.5em;
    text-align: center;
    @media (max-width: 500px) {
        font-size: 2em;
    }
`
const Content = styled.p`
    width: 80%;
    line-height: 30px;
    letter-spacing: .5px;
    text-align: center;
    font-size: 1.3em;
    @media (max-width: 500px) {
        width: 100%;
        font-size: 1.05rem;
        letter-spacing: unset;
    }
`
const MiddleContent = styled(Content)`
    margin: 0;
    @media (max-width: 500px) {
        margin-block-end: 1rem;
    }
`
const LastContent = styled(Content)`
    @media (max-width: 500px) {
        display: none;
    }
`
export const HomePageContent = () => {
    return (
        <StyledHomePageContent>
            <ContentTitle>Organize your job search</ContentTitle>
            <Content>
                Revolutionize your job search with our platform that lets you effortlessly track your job applications and maintain an organized approach.
            </Content>
            <MiddleContent>
                Say goodbye to messy job search spreadsheets!
            </MiddleContent>
            <LastContent>
                With our solution, you can now easily keep track of every important detail about your job opportunities, all in one centralized location.
            </LastContent>
            <HomePageCallToAction />
        </StyledHomePageContent>
    )
}
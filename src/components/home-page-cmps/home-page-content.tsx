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
    text-align: center;
    font-size: 1.2em;
    @media (max-width: 500px) {
        padding: 0 1em;
        font-size: 1em;
    }
`

export const HomePageContent = () => {
    return (
        <StyledHomePageContent>
            <ContentTitle>Organize your job search</ContentTitle>
            <Content>
                Track your job applications and keep your job search organized all in one place.
            </Content>
            <Content>
                No more messy job search spreadsheets. Keep track of every detail about your job opportunities.
            </Content>
            <HomePageCallToAction />
        </StyledHomePageContent>
    )
}
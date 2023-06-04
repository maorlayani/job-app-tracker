import { ConetntContainer, LogoLoader, RectangleLoader, StyledApplicationLoader, SubTitleLoader, TitleLoader } from "./styled-application-loader"

export const ApplicationLoader = () => {
    return <StyledApplicationLoader>
        <LogoLoader></LogoLoader>
        <ConetntContainer>
            <TitleLoader></TitleLoader>
            <SubTitleLoader></SubTitleLoader>
            <RectangleLoader></RectangleLoader>
            <RectangleLoader></RectangleLoader>
            <RectangleLoader></RectangleLoader>
        </ConetntContainer>
    </StyledApplicationLoader>
}
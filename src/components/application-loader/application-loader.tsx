import { LogoLoader, RectangleLoader, StyledApplicationLoader, TitleLoader } from "./styled-application-loader"

export const ApplicationLoader = () => {
    return <StyledApplicationLoader>
        <LogoLoader></LogoLoader>
        {/* <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}> */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: '.5em' }}>
            <TitleLoader></TitleLoader>
            <RectangleLoader></RectangleLoader>
            <RectangleLoader></RectangleLoader>
        </div>
    </StyledApplicationLoader>
}
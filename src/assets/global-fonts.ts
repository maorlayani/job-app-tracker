import { createGlobalStyle } from 'styled-components'
import LeagueSpartanMedium from '../assets/fonts/LeagueSpartan-Medium.ttf';
import LeagueSpartanBold from '../assets/fonts/LeagueSpartan-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'league-spartan-medium';
    src: url(${LeagueSpartanMedium});
  }
  @font-face {
    font-family: 'league-spartan-bold';
    src: url(${LeagueSpartanBold});
  }
`

export default GlobalStyle;
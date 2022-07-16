import 'styled-components';
import { THEME as theme } from './';

declare module 'styled-components' {
  type ThemeType =  typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

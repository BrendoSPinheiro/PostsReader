/* eslint-disable @typescript-eslint/no-empty-interface */
import { dark } from './styles/theme/dark';

type Theme = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

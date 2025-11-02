import "styled-components";
import { theme } from './main'

declare module "styled-components" {
  type Theme = typeof theme;

  interface DefaultTheme extends Theme {}
}
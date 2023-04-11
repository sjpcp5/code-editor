import { PropsWithChildren } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { commonColors, darkColors, lightColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = false;
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: commonColors.primary,
      },
    },
    background: darkMode ? darkColors.background : lightColors.background,
    font: darkMode ? darkColors.font : lightColors.font,
    commonColors,
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

declare module '@mui/material/styles' {
  interface Theme {
    background: string;
    font: string;
    commonColors: { [key: string]: string };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background: string;
    font: string;
    commonColors: { [key: string]: string };
  }
}

export default CustomThemeProvider;

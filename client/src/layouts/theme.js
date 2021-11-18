const lightColors = {
  primary: '#6200EE',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#018786',
  background: '#FFFFFF',
  surface: '#FFFFFF',
  error: '#B00020',
  textOnPrimary: '#FFFFFF',
  textOnSecondary: '#000000',
  textOnBackground: '#000000',
};

const darkColors = {
  primary: '#BB86FC',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#03DAC6',
  background: '#121212',
  surface: '#121212',
  error: '#CF6679',
  textOnPrimary: '#000000',
  textOnSecondary: '#000000',
  textOnBackground: '#FFFFFF',
};

const typography = {
  sizeLarge: '128px',
  sizeH1: `font-family: 'Poppins'; font-weight: lighter; font-size: 79px; letter-spacing: -1.5px;`,
  sizeH2: '64px',
  sizeH3: '42px',
  sizeH4: '34px',
  sizeH5: '26px',
  sizeH6: '20px',
  sizeBodyText: '16px',
  sizeTiny: '13px',
  weightMedium: '500',
  weightBold: '700',
  weightExtraBold: '800',
  weightBlack: '900',
};
const zIndex = {
  levelMinus1: '-1000',
  level1: '1000',
  level2: '2000',
  level3: '3000',
  level4: '4000',
  level5: '5000',
  level6: '6000',
  level7: '7000',
  level8: '8000',
  level9: '9000',
  level10: '10000',
};
const media = {
  huge: '@media (min-width: 1700px)',
  bigDesktop: '@media (min-width: 1440px)',
  desktop: '@media (min-width: 1150px)',
  bigTablet: '@media (min-width: 1020px)',
  tablet: '@media (min-width: 768px)',
  bigPhone: '@media (min-width: 400px)',
};

export const LightTheme = {
  colors: lightColors,
  typography,
  zIndex,
  media,
};
export const DarkTheme = {
  colors: darkColors,
  typography,
  zIndex,
  media,
};

// Limit line length to 70–80 characters.

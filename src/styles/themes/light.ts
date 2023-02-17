export const light = {
  colors: {
    black: '#000000',

    gray25: '#FCFCFD',
    gray50: '#F9FAFB',
    gray100: '#F2F4F7',
    gray200: '#E4E7EC',
    gray300: '#D0D5DD',
    gray400: '#98A2B3',
    gray500: '#667085',
    gray600: '#475467',
    gray700: '#344054',
    gray800: '#1D2939',
    gray900: '#101828',

    primary50: '#ECFDF3',
    primary100: '#D1FADF',
    primary200: '#6CE9A6',
    primary300: '#32D583',
    primary400: '#249E64',
    primary500: '#027A48',

    successExtraLight: '#EFF8FF',
    successLight: '#B2DDFF',
    successDark: '#2E90FA',

    warningExtraLight: '#FFFAEB',
    warningLight: '#FEF0C7',
    warningDark: '#FEC84B',

    errorExtraLight: '#FEE4E2',
    errorLight: '#FDA29B',
    errorDark: '#F04438',

    white: '#FFFFFF',
  },
  fonts: { main: 'Lato' },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  zIndex: {
    header: 10,
    tooltip: 200,
    modal: 250,
    dropdown: 250,
    sideMenu: 300,
  },
  buttons: {
    sizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const,
    variants: ['primary', 'outlined', 'ghost'] as const,
  },
};

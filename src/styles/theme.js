import { hex2rgba } from '@utils';

const ACCENT = '#efb8c8';
const DARK_BG = '#000000';
const BG = '#000000';

const theme = {
  colors: {
    darkNavy: DARK_BG,
    navy: BG,
    lightNavy: '#242424',
    lightestNavy: '#cbcbcb',
    slate: '#cbcbcb',
    lightSlate: '#cbcbcb',
    lightestSlate: '#cbcbcb',
    white: '#cbcbcb',
    green: ACCENT,
    transGreen: hex2rgba(ACCENT, 0.07),
    shadowNavy: hex2rgba(DARK_BG, 0.7),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,

  // Add global styles including text selection
  globalStyles: `
    ::selection {
      background-color: ${ACCENT};
      color: #ffffff;
    }
    ::-moz-selection {
      background-color: ${ACCENT};
      color: #ffffff;
    }
    body {
      -webkit-tap-highlight-color: ${ACCENT};
    }
  `,
};

export default theme;
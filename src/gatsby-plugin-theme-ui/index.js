export default {
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem'
  ],
  fonts: {
    sansSerif: 'Inter, system-ui, sans-serif'
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '2rem'
  ],
  fontWeights: {
    normal: 400,
    bold: 600,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  colors: {
    text: '#f0f0f0',
    primary: '#232323',
    highlight: '#b2102f',
    border: '#5b5b5b',
    borderLink: '#ff4569'
  },
  styles: {
    root: {
      backgroundColor: 'primary',
      color: 'text',
      fontFamily: 'sansSerif',
      fontSize: 3,
      lineHeight: 'normal',
      fontWeight: 'normal',
    },
    h1: {
      mt: 6,
      mb: 4,
      fontSize: 6,
      fontWeight: 'bold',
      lineHeight: 'tight',
    },
    h2: {
      mt: 9,
      mb: 6,
      pb: 2,
      fontSize: 1,
      lineHeight: 'tight',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      borderBottom: '1px solid',
      borderColor: 'border',
    },
    h3: {
      mt: 7,
      mb: 2,
      fontSize: 5,
      lineHeight: 'tight',
      fontWeight: 'bold',
    },
    p: {
      mt: 0,
      mb: 4,
    },
    ul: {
      p: 0,
      listStyle: 'none',
    },
    li: {
      mt: 0,
      mb: 2,
      '&::before': {
        content: '"•"',
        pr: 4,
      }
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: 'borderLink',
      '&:hover': {
        backgroundColor: 'highlight',
      },
      '> code': {
        backgroundColor: 'highlight'
      }
    },
    hr: {
      my: 9,
      border: 0,
      height: 1,
      backgroundColor: 'border',
    }
  }
}

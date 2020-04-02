module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    fontFamily: {
      display: 'Rubik, sans-serif',
      body: 'Rubik, sans-serif'
    },
    minWidth: {
      '64': '64px',
      '96': '96px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff'
    },
    extend: {
      fontSize: {
        'overline': '0.625rem',
        'caption': '.75rem',
        'button': '0.875rem',
        'body-2': '0.875rem',
        'body-1': '1rem',
        'subtitle-2': '0.875rem',
        'subtitle-1': '1rem',
        'headline-6': '1.25rem',
        'headline-5': '1.5rem',
        'headline-4': '2.125rem',
        'headline-3': '3rem',
        'headline-2': '3.75rem',
        'headline-1': '6rem',
      },
      screens: {
        'dark-mode': {'raw': '(prefers-color-scheme: dark)'},
      },
      width: {
        card: '344px',
        listTable: '287px'
      },
      height: {
        '18': '4.5rem',
        inputBox: '3.5rem',
      },
      opacity: {
        '12': '.12',
        '38': '.38',
        '60': '.60',
        '87': '.87',
      },
      colors: {
        primary: {
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          default: 'var(--color-primary)',
          '400': 'var(--color-primary-400)',
          '500': 'var(--color-primary-500)',
        },
        secondary: {
          '100': 'var(--color-secondary-100)',
          '200': 'var(--color-secondary-200)',
          default: 'var(--color-secondary)',
          '400': 'var(--color-secondary-400)',
          '500': 'var(--color-secondary-500)',
        },
        'on-surface': {
          default: 'var(--color-on-surface)',
          medium: 'var(--color-on-surface-medium)',
          disabled: 'var(--color-on-surface-disabled)',
          trans: 'var(--color-on-surface-trans)'
        },
        surface: {
          default: 'var(--color-surface)',
          // Note: elevations only available in dark mode. https://material.io/design/color/dark-theme.html#properties
          'elevation-1': 'var(--color-surface-elevation-1)',
          'elevation-2': 'var(--color-surface-elevation-2)',
          'elevation-3': 'var(--color-surface-elevation-3)',
          'elevation-4': 'var(--color-surface-elevation-4)',
          'elevation-6': 'var(--color-surface-elevation-6)',
          'elevation-8': 'var(--color-surface-elevation-8)',
          'elevation-12': 'var(--color-surface-elevation-12)',
          'elevation-16': 'var(--color-surface-elevation-16)',
          'elevation-24': 'var(--color-surface-elevation-24)'
        },
        border: 'var(--color-border)',
        error: 'var(--color-error)',
        red: 'var(--color-red)',
        orange: 'var(--color-orange)',
        yellow: 'var(--color-yellow)',
        green: 'var(--color-green)',
        blue: 'var(--color-blue)',
        purple: 'var(--color-purple)',
      },
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    columnGap: ['responsive'],
    rowGap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-elevation')(['responsive', 'hover', 'focus', 'active']),
    require('tailwindcss-dark-mode')(),
  ],
}

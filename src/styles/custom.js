export default {
  layer: {
    overlay: {
      background: 'rgba(0, 0, 0, .2)',
    }
  },
  global: {
    focus: {
      border: { color: 'focus' }
    },
    breakpoints: {
      huge: {},
      xlarge: { value: 1400 },
      large: { value: 992 },
      medium: { value: 768 },
    },
    colors: {
      'brand': '#7D4CDB',
      'focus': '#7D4CDB',
      'accent-1': '#3DCC91', 'neutral-1': '#0F9960',
      'accent-2': '#FFB366', 'neutral-2': '#D9822B',
      'accent-3': '#48AFF0', 'neutral-3': '#137CBD',
      'accent-4': '#FF7373', 'neutral-4': '#DB3737',
      'status-critical': '#DB3737',
      'status-error': '#F55656',
      'status-warning': '#F29D49',
      'status-ok': '#15B371',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
    },
    font: {
      family: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\",  \"Helvetica Neue\", Arial, sans-serif,  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
    },
  },
}

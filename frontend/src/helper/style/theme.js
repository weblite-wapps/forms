import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {},
  overrides: {
    MuiToolbar: {
      regular: {
        minHeight: 50,
      },
    },
    MuiTypography: {
      h1: {
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 'Bold',
        userSelect: 'none',
      },
      body1: {
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 'Bold',
        userSelect: 'none',
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 'Bold',
      },
    },
  },
})

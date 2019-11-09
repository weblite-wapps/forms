import { createMuiTheme } from '@material-ui/core/styles'
import { height } from 'dom-helpers'

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
  },
})

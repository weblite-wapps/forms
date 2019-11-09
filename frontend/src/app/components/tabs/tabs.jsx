// modules
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// components
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const StyledTabs = withStyles({
  root: {
    backgroundColor: '#F0F0F0',
    minHeight: '40px',
    maxHeight: '40px',
    shadowColor: 'none',
  },
  indicator: {
    height: '100%',
    color: 'white',
    backgroundColor: '#818181',
  },
})(props => <Tabs {...props} />)

const StyledTab = withStyles({
  root: {
    color: '#000',
    fontSize: '12px',
    lineHeight: '21px',
    letterSpacing: '-0.08px',
    fontWeight: 'bold',
    padding: '0 12px',
    minHeight: '40px',
    maxHeight: '40px',
    zIndex: 5,
  },
  selected: {
    color: '#FFFFFF',
  },
})(props => <Tab {...props} />)

const MyTabs = ({ selected, navigate }) => (
  <AppBar
    position="static"
    color="default"
    elevation={0}
    style={{ width: '100%' }}
  >
    <StyledTabs
      value={selected}
      variant="fullWidth"
      onChange={(_, value) => navigate(value)}
    >
      <StyledTab label="ویرایش فرم" value="create" />
      <StyledTab label="تحلیل و بررسی" value="stats" />
      <StyledTab label="ورودی ها" value="entries" />
    </StyledTabs>
  </AppBar>
)

export default MyTabs

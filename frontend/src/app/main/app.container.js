// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import App from './app'
// actions
import { dispatchSetPath } from './app.action'

const mapStateToProps = state => ({
  path: R.path(['app', 'path'], state),
})

const mapDispatchToProps = () => ({
  navigate: dispatchSetPath,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

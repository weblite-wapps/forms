// modules
import * as R from 'ramda'
import { connect } from 'react-redux'
// components
import Tabs from './tabs'
// actions
import { dispatchSetPath } from '../../main/app.action'

const mapStateToProps = state => {
  const path = R.path(['app', 'path'], state)
  return {
    selected:
      path === 'create' || path === 'preview'
        ? 'create'
        : path === 'entries' || path === 'userAnswers'
        ? 'entries'
        : 'stats',
  }
}

const mapDispatchToProps = () => ({
  navigate: dispatchSetPath,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tabs)

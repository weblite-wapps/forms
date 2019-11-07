// modules
import * as R from 'ramda'
import { connect } from 'react-redux'

// components
import Create from './create'
import {
  dispatchAddToDraftForm,
  dispatchRemoveFromDraftForm,
} from '../../main/app.action'
// actions

const mapStateToProps = state => ({
  form: state.app.draftForm,
})

const mapDispatchToProps = () => ({
  addField: dispatchAddToDraftForm,
  removeField: dispatchRemoveFromDraftForm,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create)

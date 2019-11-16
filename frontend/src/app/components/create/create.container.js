// modules
// import * as R from 'ramda'
import { connect } from 'react-redux'

// components
import Create from './create'
import {
  dispatchAddDraftField,
  dispatchRemoveDraftField,
} from '../../main/app.action'
// actions

const mapStateToProps = state => ({
  form: state.app.draftForm,
})

const mapDispatchToProps = () => ({
  addField: type => dispatchAddDraftField,
  removeField: dispatchRemoveDraftField,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create)

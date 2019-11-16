// modules
// import * as R from 'ramda'
import { connect } from 'react-redux'

// components
import Create from './create'
import {
  dispatchAddDraftField,
  dispatchRemoveDraftField,
  dispatchSetPath,
  dispatchDuplicateDraftField,
} from '../../main/app.action'
import { dispatchSetMode, dispatchSetSelectedField } from './create.action'
// actions

const mapStateToProps = state => ({
  form: state.app.draftForm,
  mode: state.create.mode,
})

const mapDispatchToProps = () => ({
  addField: dispatchAddDraftField,
  removeField: dispatchRemoveDraftField,
  editField: field => {
    dispatchSetMode('edit')
    dispatchSetSelectedField(field)
  },
  duplicateField: dispatchDuplicateDraftField,

  preview: () => dispatchSetPath('preview'),
})

export default connect(mapStateToProps, mapDispatchToProps)(Create)

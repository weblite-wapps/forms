import { connect } from 'react-redux'

import EditPage from './editPage'
import { dispatchUpdateDraftField } from '../../../../main/app.action'
import { dispatchSetMode, dispatchSetSelectedField } from '../../create.action'

const mapStateToProps = state => ({
  field: state.create.editPage.selectedField,
})

const mapDispatchToProps = () => ({
  onClose: () => {
    dispatchSetMode('create')
    dispatchSetSelectedField({})
  },
  onSubmit: field => {
    dispatchUpdateDraftField(field)
    dispatchSetSelectedField({})
    dispatchSetMode('create')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage)

import { connect } from 'react-redux'

// component
import Preview from './preview'

const mapStateToProps = state => ({
  form: state.app.draftForm,
  mode: state.preview.mode,
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Preview)

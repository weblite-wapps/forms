import { connect } from 'react-redux'

// component
import CoverPage from './coverPage'
import { dispatchSetMode } from '../../preview.action'
import { dispatchSetPath } from '../../../../main/app.action'

const mapStateToProps = state => ({
  body: `Lorem ipsum is placeholder text 
    commonly used in the graphic, print, and publishing
     industries for previewing layouts and visual mockups.`,
})

const mapDispatchToProps = () => ({
  onStartClick: () => dispatchSetMode('ending'),
  onEndClick: () => {
    dispatchSetMode('starting')
    dispatchSetPath('create')
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CoverPage)

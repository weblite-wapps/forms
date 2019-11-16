import React from 'react'

//components
import { SingleLineInput } from '../../../../../../helper/components/inputs'

class SingleLineEditPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.field
    this.handleCheck = this.handleCheck.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleCheck() {
    const { onSubmit } = this.props
    onSubmit(this.state)
  }

  handleClose() {
    const { onClose } = this.props
    onClose()
  }

  render() {
    return (
      <>
        <img
          src="assets/svg/check.svg"
          alt="check"
          onClick={this.handleCheck}
        />
        <img
          src="assets/svg/close.svg"
          alt="close"
          onClick={this.handleClose}
        />

        <SingleLineInput
          label="عنوان ورودی"
          placeholder="عنوان موردنظر را وارد کنید"
          onChange={({ target: { value } }) => {
            this.setState({ data: { ...this.state.data, title: value } })
            console.log('state: ', this.state)
          }}
          value={this.state.title}
        />

        <SingleLineInput
          label="(Place Holder) جانگهدار"
          placeholder="عنوان موردنظر را وارد کنید"
          onChange={({ target: { value } }) =>
            this.setState({ data: { ...this.state.data, placeHolder: value } })
          }
          value={this.state.placeholder}
        />
      </>
    )
  }
}

export default SingleLineEditPage

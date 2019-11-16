const uuidv4 = require('uuid/v4')

export const mapTypeToFields = {
  singleLineInput: {
    id: uuidv4(),
    type: 'SingleLineInput',
    data: {
      title: 'salam be hameye shomaha',
      placeHolder: '',
      isOptional: true,
    },
  },

  multiLineInput: {
    type: 'MultiLineInput',
    data: {
      title: '',
      placeHolder: '',
      isRequired: true,
    },
  },
  // 'colorPicker',
  // 'fileUpload',
  // 'dropDownMenu',
  // 'ratioButton',
  // 'checkBox',
  // 'text',
  // 'image',
  // 'header',
  // 'divider',
}

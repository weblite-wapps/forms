export default type => {
  if (type === 'singleLineInput') return [type, 'ورودی تک خطی']
  if (type === 'multiLineInput') return [type, 'ورودی چند خطی']
  if (type === 'colorPicker') return [type, 'انتخاب رنگ']
  if (type === 'fileUpload') return [type, 'آپلود فایل']
  if (type === 'dropDownMenu') return [type, 'منو باز شو']
  if (type === 'ratioButton') return [type, 'چند گزینه‌ای']
  if (type === 'checkBox') return [type, 'چند انتخابی']
  if (type === 'text') return [type, 'متن']
  if (type === 'image') return [type, 'تصویر']
  if (type === 'header') return [type, 'عنوان']
  if (type === 'divider') return [type, 'جداکننده']
}

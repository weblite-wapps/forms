// modules
import React from 'react'
// components
import FieldBox from './components/fieldBox'
import Button from '../button/button'
import SearchField from '../searchField/searchField'
import User from '../user/user'
import Drawer from '../drawer/drawer'
import Switch from '../switch/switchButtons'
import TextOptions from '../textOptions/textOptions'
import FiledAppBar from '../appBar/filedAppBar'
import { SingleLineInput, MultiLineInput, ColorPicker } from '../Inputs'

const Create = () => {
  const [open, setOpen] = React.useState(false)

  console.log('OPEN', open)

  return (
    <>
      <FiledAppBar
        onLeft={console.log}
        onRight={console.log}
        title="پیش نمایش"
      />
      <FiledAppBar
        onLeft={console.log}
        onRight={console.log}
        title="پیش نمایش"
        variant="preview"
      />
      <FiledAppBar
        onLeft={console.log}
        onRight={null}
        title="مرحله ۲ از ۲۲"
        variant="form"
      />
      <div
        style={{
          overflow: 'auto',
          height: 'calc(100% - 40px)', // subtract header
          padding: '20px 0',
          boxSizing: 'border-box',
        }}
      >
        <FieldBox mode="DEFAULTS" type="صفحه شروع" onEdit={console.log} />
        <FieldBox
          mode="DIVIDER"
          type="جداکننده (۱ از ۱)"
          onDelete={console.log}
          onDuplicate={console.log}
        />
        <FieldBox
          mode="COVER"
          type="ورودی تک خطی"
          title="محل تولد"
          onEdit={console.log}
          onDelete={console.log}
          onDuplicate={console.log}
        />

        <SearchField onChange={console.log} />

        <center
          style={{
            margin: '0 20px 16px',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <Button text="ذخیره" color="blue" onClick={console.log} />
          <Button text="پیش نمایش" color="gray" onClick={console.log} />
          <Button
            text="افزودن مورد"
            color="yellow"
            variant="plus"
            onClick={() => setOpen(true)}
          />
        </center>

        <center
          style={{
            margin: '0 20px 16px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button text="ارسال جدید" color="blue" onClick={console.log} />
          <Button text="خروجی اکسل" color="green" onClick={console.log} />
          <Button text="غیرفعال سازی" color="gray" onClick={console.log} />
        </center>

        <User
          name="مصطفی محسنی کبیر"
          date="پنج شنبه ۱۲ آبان - ۱۶:۵۴"
          onDelete={console.log}
          avatarSrc="https://i.pinimg.com/564x/37/eb/f4/37ebf4bf5206f67cb5f221dc7dc92609.jpg"
        />

        <User
          name="Ali Asgari"
          date="پنج شنبه ۱۲ آبان - ۱۶:۵۴"
          onDelete={console.log}
          deActive
        />

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          onItemClick={console.log}
        />

        <SingleLineInput
          label="جانگهدار (Place Holder)"
          placeholder="عنوان مورد نظر را وارد کنید"
          onChange={console.log}
        />

        <Switch
          leftText="اجباری نیست"
          rightText="اجباری است"
          onLeftClick={console.log}
          onRightClick={console.log}
          label="ضرورت"
        />

        <Button
          text="تنظیمات پیشرفته"
          color="blue"
          onClick={console.log}
          variant="standAlone"
        />

        <MultiLineInput
          placeholder="متن پایان را وارد کنید"
          onChange={console.log}
        />

        <Switch
          leftText="عدم نمایش"
          rightText="نمایش"
          onLeftClick={console.log}
          onRightClick={console.log}
          label="صفحه پایان"
        />

        <TextOptions
          onBold={console.log}
          onItalic={console.log}
          onUnderLine={console.log}
          onLink={console.log}
        />

        <SingleLineInput
          label="محدودیت حجم(کیلوبایت)"
          placeholder="مقدار مورد نظر را وارد کنید"
          onChange={console.log}
          type="number"
        />
      </div>
    </>
  )
}
export default Create

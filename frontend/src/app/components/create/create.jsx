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
import {
  SingleLineInput,
  MultiLineInput,
  ColorPicker,
  MultiSelect,
} from '../Inputs'

import { Text, Image } from '../presentation'

const Create = () => {
  const [open, setOpen] = React.useState(false)

  console.log('OPEN', open)

  return (
    <div
      style={{
        overflow: 'auto',
        height: 'calc(100% - 40px)', // subtract header
        padding: '20px 0',
        boxSizing: 'border-box',
      }}
    >
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

      {/* TODO: I Don't understand This process, How can User get Inputs */}
      <ColorPicker
        label="انتخاب رنگ"
        colors={[
          { color: '#00C0FF', selected: false, id: '#00C0FF' },
          { color: '#4997E6', selected: true, id: '#4997E6' },
          { color: '#FF9C46', selected: false, id: '#FF9C46' },
          { color: '#6BCE6B', selected: false, id: '#6BCE6B' },
          { color: '#818181', selected: false, id: '#818181' },
          { color: '#E6494F', selected: false, id: '#E6494F' },
        ]}
        onClick={console.log}
        onChange={console.log}
        hasPicker
      />

      <Text
        label="این یک عنوان است"
        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
      />

      <Image
        src="https://i.pinimg.com/564x/bc/dd/2c/bcdd2cbb2ac6ab2d0caacbb27f6641a4.jpg"
        alt="please use these accessibility tools"
      />

      <Image
        src="https://i.pinimg.com/564x/28/46/32/2846324e422142c381eae45ec3cdbfdf.jpg"
        alt="please use these accessibility tools"
      />
      <MultiSelect
        label="چند انتخابی"
        onClick={console.log}
        options={[
          { text: 'گزینه اول', selected: false, id: '1' },
          { text: 'گزینه دوم', selected: true, id: '2' },
          { text: 'گزینه سوم', selected: true, id: '3' },
          { text: 'گزینه چهارم', selected: false, id: '4' },
        ]}
      />
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
  )
}
export default Create

import React from 'react'
import './app.scss'
// components
import Tabs from '../components/tabs/tabs.container'
import AppBar from '../components/appBar/appBar'
import Create from '../components/create/create.container'
import Preview from '../components/preview/preview.container'
import UserAnswers from '../components/userAnswers/userAnswers.container'
import Entries from '../components/entries/entries.container'

const componentMapper = {
  create: <Create />,
  preview: <Preview />,
  userAnswers: <UserAnswers />,
  entries: <Entries />,
}

const App = ({ path }) => (
  <>
    <AppBar />
    <div className="body">
      <Tabs />
      {componentMapper[path]}
    </div>
  </>
)

export default App

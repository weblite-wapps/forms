import React from 'react'
import './app.scss'
// components
import Tabs from '../components/tabs/tabs.container'
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
  <div className="app">
    <Tabs />
    <div className="body">{componentMapper[path]}</div>
  </div>
)

export default App

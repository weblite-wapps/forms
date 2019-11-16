import mongoose from 'mongoose'

import config from './config'

const { url, options } = config.mongo

mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

mongoose.connection.on(
  'error',
  console.error.bind(console, ' ❌  mongodb connection error:'),
)
mongoose.connection.once('open', () =>
  console.log(` ✔️  mongodb successfully connected!`),
)

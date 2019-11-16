import * as P from 'bluebird'

const production = process.env.NODE_ENV === 'production'

export default {
  production,
  package: {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version,
  },
  server: {
    host: production ? 'localhost' : undefined, // all IPs
    port: 4250,
  },
  mongo: {
    url: `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`,
    options: {
      promiseLibrary: P,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
    },
  },
}

import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

import config from './config.js'
import router from '../routers'

const app = new Koa()
  .use(
    cors({
      // origin: 'https://www.weblite.me:3000'
    }),
  )
  // .use((ctx, next) => {
  //   console.log(ctx.request)
  //   next()
  // })
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(config.server.port, config.server.host, () =>
  console.log(` ✔️  server successfully started on port ${config.server.port}!`),
)

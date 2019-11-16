import Router from '@koa/router'

import { getAnswer, updateAnswer } from '../models/answer'

export default new Router()
  .get('/', async ctx => {
    ctx.body = await getAnswer(ctx.request.query)
  })
  .post('/', async ctx => {
    await updateAnswer(ctx.request.query, ctx.request.body)
    ctx.status = 200
  })

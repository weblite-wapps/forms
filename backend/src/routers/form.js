import Router from '@koa/router'
import { getAnswers } from '../models/answer'

import { getFormById, updateForm } from '../models/form'

export default new Router()
  .get('/:id/answers', async ctx => {
    ctx.body = await getAnswers(ctx.params.id)
  })
  .get('/:id', async ctx => {
    ctx.body = await getFormById(ctx.params.id)
  })
  .post('/:id', async ctx => {
    await updateForm(ctx.params.id, ctx.request.body)
    ctx.status = 200
  })

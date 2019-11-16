import Router from '@koa/router'

import form from './form'

export default new Router()
  .use('/api/form', form.routes())

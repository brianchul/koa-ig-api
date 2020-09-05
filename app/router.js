const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

const router = Router()

router.get('/', async(ctx) => {
    ctx.body = 'hello body'
})

router .get('/ready', async(ctx) => {
    ctx.body = 'ready content'
})

router.get('/admin', async(ctx) => {
    let name = ctx.query.name;
    let talk = ctx.query.talk;
    ctx.body = `<p> ${name}:${talk}`
})

app.use(router.routes())
app.listen(5566)
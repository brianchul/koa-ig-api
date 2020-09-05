const Koa = require('koa')
const Router = require('koa-router')
const { FB } = require('fb/lib/fb')
const app = new Koa()

const FACEBOOK_APP_ID = ""
const FACEBOOK_APP_SECRET = ""
const FACEBOOK_REDIRECT_URI = ""


const router = Router()

router.get('/', async(ctx) => {
    ctx.body = JSON.stringify({"alive": true})
})

router.get("/oauthValidation", async(ctx)=>{
    ctx.body = `<a href="">login to facebook</a>`
})

router.get("/callback", async(ctx)=> {

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
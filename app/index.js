const Koa = require('koa');
const logger = require('koa-logger')
const app = new Koa();

app.use(logger())

app.use(async(ctx, next) => {
	const start_time = Date.now();
	await next();
	const ms = Date.now() - start_time;
	console.log(`${ctx.method} ${ctx.url} = ${ms}ms`);
});


app.listen(5566);

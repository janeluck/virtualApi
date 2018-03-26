const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const router = new Router()
const path = require('path')
const fs = require('fs')
router.get('/', (ctx, next) => {
    let html = `

<script>
    fetch('/login', {
        credentials: 'include'
    }).then(response => {

    })
</script>

    <ul>
      <li><a href="/login">login</a></li>
    </ul>
  `
    ctx.body = html

})
router.get('/login', (ctx, next) => {


    ctx.cookies.set(
        'koaCookie',
        'xxxxxxx',
        {

            path: '/',       // 写cookie所在的路径
            maxAge: 10 * 60 * 1000, // cookie有效时长
            //  expires: new Date('2017-02-15'),  // cookie失效时间
            httpOnly: false,  // 是否只用于http请求中获取
            overwrite: false  // 是否允许重写
        }
    )
    ctx.body = 'cookie is ok'
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3009);
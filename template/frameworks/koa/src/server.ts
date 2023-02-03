const Koa = require('koa');
const consola = require('consola');

const app = new Koa();

async function start() {
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;

  app.use(async (ctx) => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx;
  });

  app.listen(port, host);

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}

start();

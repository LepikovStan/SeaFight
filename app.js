'use strict'
const koa = require('koa'),
      app = koa(),
      router = require('koa-router')(),
      staticServer = require('koa-static'),
      co = require('co'),
      render = require('co-render'),
      routes = require('./routes');

//app.use(staticServer('static'));

Object.keys(routes).map((route) => {
  router.get(route, routes[route]);
})

app.render = function *(fileName, data) {
  data.engine = 'htmling'
  return yield render(`./static/${fileName}.html`, data);
};

app.use(router.routes());

app.listen(3000, () => {
    console.log('server is started');
});

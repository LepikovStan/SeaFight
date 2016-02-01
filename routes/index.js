'use strict'
let fs = require('co-fs');

module.exports = {
  '/': function *(){
    this.body = yield this.app.render('index', {title: 'index title', description: 'index description'});
  }
}

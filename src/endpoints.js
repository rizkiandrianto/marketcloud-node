'use strict'

var path = require('path')
var fs = require('fs')

var endpoints = {}

fs
  .readdirSync('./endpoints')
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'resource.js')
  })
  .forEach(function (file) {
    var name = file.replace('.js', '')

    endpoints[name] = require(`./endpoints/${file}`)
  })

module.exports = endpoints

#!/usr/bin/env node
var stdin = require('get-stdin')

var clock = require('../')

stdin().then(function (data) {
  if (!data) data = process.argv[2]

  console.log(clock(data))
})

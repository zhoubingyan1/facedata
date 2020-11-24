'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_PATH: '"http://192.168.1.236:8081/miner"', //dev开发环境
})
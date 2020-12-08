'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_PATH: '"/miner"', //dev开发环境
    //API_PATH: '"/"', //dev开发环境
})
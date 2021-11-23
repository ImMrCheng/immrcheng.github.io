/*
 * @Author: chengbin
 * @Create: 2021-05-08 16:30:25
 * @Description: mock假数据
 */
import Mock from 'mockjs'

const moduleFiles = require.context('./modules', false, /\.js$/)

const modules = moduleFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = moduleFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

Mock.setup({
  timeout: '50-800'
})

for (const module in modules) {
  const { type, template, callback } = modules[module]
  const api = new RegExp(`api/${module}`)
  Mock.mock(api, type, template ? { statusCode: '0', data: template } : (opt) => {
    const data = callback(opt)
    return {
      statusCode: '0',
      data
    }
  })
}

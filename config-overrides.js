const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
// const { getThemeVariables } = require('antd/dist/theme')
const path = require('path')

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: getThemeVariables({
    //   // dark: true // 开启暗黑模式
    //   // compact: true // 开启紧凑模式
    // })
  }),
  addWebpackAlias({
    '@': path.resolve('./src')
  }),
  (config) => {
    //修改、添加loader 配置 :
    // 所有的loaders规则是在config.module.rules(数组)的第二项
    // 即：config.module.rules[2].oneof  (如果不是，具体可以打印 一下是第几项目)
    // 修改 less 配置 ，规则 loader 在第7项(具体可以打印配置)
    const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf
    console.log(loaders)
    loaders[7].use.push({
      loader: 'style-resources-loader',
      options: {
        patterns: path.resolve(__dirname, '@/styles/variable.less') //全局引入公共的scss 文件
      }
    })
    return config
  }
)

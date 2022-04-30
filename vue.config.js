const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	configureWebpack: {
		resolve: {
			alias: { //@就是src，内部配置过了；省后缀，内部也配置过了
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'pages': '@/pages'
			}
		}
	}
})

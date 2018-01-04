window.ns = {}
window.ns.modules = {}
window.ns.utils = {}

require.config({
  baseUrl: "",
  paths: {
    'vue': 'js/vendor/vue.min',
    'vue_router': 'js/vendor/vue-router.min',
    'text': 'js/vendor/require-text.min'
  },
  shim: {
    vue: {
      exports: 'Vue'
    },
    vue_router: {
      exports: 'VueRouter'
    }
  }
})

require([
	'vue',
	'vue_router',
  'js/vue-highlightjs',
	'js/routes',
	'js/utils'
], function(Vue, VueRouter, VueHighlightJS, AppRoutes){
	Vue.use(VueRouter)
  Vue.use(VueHighlightJS)

	window.ns.router = new VueRouter({
		mode: 'hash',
		routes: AppRoutes
	})
 
	window.ns.app = new Vue({
		el: '#app',
		router: window.ns.router
	})
})
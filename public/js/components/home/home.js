define(['vue', 'text!./home.tpl'], function(Vue, template){
	return Vue.extend({
		template: template,
		methods: {
			onStart: function () {
				window.location.hash = "/js-quiz"
			}
		}
	})
})
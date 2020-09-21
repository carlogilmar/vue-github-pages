document.addEventListener('DOMContentLoaded', function () {
	new Vue({
		el: '#app',
		data: {
			m1: "You got to let me know"
		},
		created: function(){
			console.log("Heeey!");
		}
	})
})
